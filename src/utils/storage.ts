import { Lesson } from "../components/Lesson/types";

type AvailableStorageType = "SessionStorage" | "LocalStorage";

export default class Storage<ItemType> {
  constructor(
    private storageKey: string = "",
    private items: ItemType,
    private readonly storageType: AvailableStorageType = "LocalStorage"
  ) {
    this.items = JSON.parse(this.storage.getItem(storageKey)) || {};
  }

  private get storage() {
    return this.storageType === "LocalStorage" ? localStorage : sessionStorage;
  }

  private save(): void {
    this.storage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  all(): ItemType {
    return this.items;
  }

  has<Key extends keyof ItemType>(key: Key): boolean {
    return !!this.items[key];
  }

  get<Key extends keyof ItemType>(key: Key): ItemType[Key] {
    return this.items[key];
  }

  set<Key extends keyof ItemType>(key: Key, value: ItemType[Key]): void {
    this.items[key] = value;
    this.save();
  }

  clear(): void {
    this.items = {} as ItemType;
    this.save();
  }

  remove(key: keyof ItemType): void {
    delete this.items[key];
    this.save();
  }
}

export const lessonStorage = new Storage<{
  selectedLessons: Lesson[];
}>("lesson", {
  selectedLessons: [],
});
