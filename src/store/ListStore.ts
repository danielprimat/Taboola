import {action, computed, makeObservable, observable} from 'mobx';
import {getList, ListItem} from '../API';
import {splitIntoChunks} from '../utils';

export declare interface ListRow {
  data: ListItem[];
}

export type FormattedList = ListRow[];

export enum RequestStatus {
  'idle',
  'loading',
  'succeeded',
  'failed',
}

export class ListStore {
  public list?: ListItem[];
  public targetValue: string;
  public requestStatus: RequestStatus;

  constructor() {
    this.list = undefined;
    this.targetValue = '';
    this.requestStatus = RequestStatus.idle;
    makeObservable(this, {
      setList: action,
      setTargetValue: action,
      setRequestStatus: action,
      list: observable,
      formattedList: computed,
      filteredList: computed,
      targetValue: observable,
      requestStatus: observable,
    });
  }

  get formattedList(): FormattedList {
    return splitIntoChunks(this.list);
  }

  get filteredList(): FormattedList {
    if (!this.targetValue.replace(/\s/g, '')) {
      return [];
    }
    const matches = this.list?.filter(item => {
      let cleanedSpacesString = item.title.rendered.replace(/\s/g, '');
      let cleanedSpacesStringTargetValue = this.targetValue.replace(/\s/g, '');
      return cleanedSpacesString.includes(cleanedSpacesStringTargetValue);
    });
    return splitIntoChunks(matches);
  }

  setTargetValue(value: string) {
    this.targetValue = value;
  }

  setList(payload: ListItem[]) {
    this.list = payload;
  }

  setRequestStatus(status: RequestStatus) {
    this.requestStatus = status;
  }

  public async loadList() {
    try {
      this.setRequestStatus(RequestStatus.loading);
      const response = await getList();
      this.setList(response);
      this.setRequestStatus(RequestStatus.succeeded);
    } catch (error) {
      console.error(error);
      this.setRequestStatus(RequestStatus.failed);
    }
  }
}

// const hasArrayChanged = (previousArray: ListItem[], newArray: ListItem[]) => {
//   let res = false;
//   if (previousArray) {
//     if (previousArray.length === newArray.length) {
//       for (let i = 0; previousArray.length > i; i++) {
//         if (!itemsAreTheSame(previousArray[i], newArray[i])) {
//           res = true;
//           break;
//         }
//       }
//     } else {
//       res = true;
//     }
//   }
//   return res;
// };
