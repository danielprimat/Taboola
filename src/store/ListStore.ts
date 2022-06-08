import { action, computed, makeObservable, observable } from "mobx";
import { getList, ListItem } from "../API";
import { getItemsArray, itemsAreTheSame, saveItemsArray, splitIntoChunks } from "../utils";

export declare interface ListRow {
  data: ListItem[];
}

export type FormattedList = ListRow[];

export enum RequestStatus {
  "idle",
  "loading",
  "succeeded",
  "failed",
}

export class ListStore {
  public list?: ListItem[];
  public targetValue: string;
  public requestStatus: RequestStatus;

  constructor() {
    this.list = undefined;
    this.targetValue = "";
    this.requestStatus = RequestStatus.idle;
    makeObservable(this, {
      setList: action,
      setTargetValue: action,
      setRequestStatus: action,
      list: observable,
      formattedList: computed,
      filteredList: computed,
      targetValue: observable,
      requestStatus: observable
    });
  }

  get formattedList(): FormattedList {
    return splitIntoChunks(this.list);
  }

  get filteredList(): FormattedList {
    if (!this.targetValue.replace(/\s/g, "")) {
      return [];
    }
    const matches = this.list?.filter(item => {
      let cleanedSpacesString = item.title.rendered.replace(/\s/g, "");
      let cleanedSpacesStringTargetValue = this.targetValue.replace(/\s/g, "");
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
      const previousArray = await getItemsArray();
      const response = await getList();

      if (previousArray && previousArray.length === response.length) {
        for (let i = 0; previousArray.length > i; i++) {
          if (!itemsAreTheSame(previousArray[i], response[i])) {
            response.reverse();
          }
        }
      }

      await saveItemsArray(response);
      this.setList(response);
      this.setRequestStatus(RequestStatus.succeeded);
    } catch (error) {
      console.error(error);
      this.setRequestStatus(RequestStatus.failed);
    }
  }
}

