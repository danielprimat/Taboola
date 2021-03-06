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
    if (!this.targetValue) {
      return [];
    }
    const matches = this.list?.filter(item => {
      return item.title.rendered.includes(this.targetValue);
    });
    return splitIntoChunks(matches);
  }

  setTargetValue(value: string) {
    this.targetValue = value.trim();
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
