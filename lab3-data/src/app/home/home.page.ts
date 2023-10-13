import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Create properties
  key = '';
  value = '';
  numItems = 0;
  items: { key: string, value: string }[] = [];
  getItemKey = '';
  itemValue = '';

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    await this.showStorage(); // Refresh list
  }

  async setItem() {
    await this.storage.set(this.key, this.value); // Set item in storage
    this.key = "";
    this.value = "";
    await this.showStorage(); // Refresh list
  }

  async getItem() {
    const value = await this.storage.get(this.getItemKey); // Get item from storage
    this.itemValue = value; // Set item value to itemValue property
  }

  async removeListItem(item: { key: string, value: string }) {
    await this.storage.remove(item.key); // Remove item from storage
    await this.showStorage(); // Refresh list
  }

  // Clear storage
  async clearItems() {
    await this.storage.clear();
    await this.showStorage(); // Refresh list
  }
  
  async showStorage() {
    // Create a temporary array to store items
    const itemsTempStorage: { key: string, value: string }[] = [];
    // Add item to items array
    await this.storage.forEach((value, key) => {
      // Push key and value to temporary storage
      itemsTempStorage.push({ key: key, value: value });
    });
    // Save items property to items array so that it can be displayed in the view
    this.items = itemsTempStorage;
    // Update numItems property
    this.numItems = await this.storage.length();
  }


}
