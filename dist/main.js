import { AddList } from './modules/AddList/AddList.js';
import { RemoveEmptyList } from './modules/RemoveEmptyList/RemoveEmptyList.js';
import { ClearItem } from './modules/ClearItem/ClearItem.js';
import { SetItem } from './modules/SetItem/SetItem.js';
import { GetItem } from './modules/GetItem/GetItem.js';
document.addEventListener('DOMContentLoaded', () => {
    GetItem();
    AddList();
    RemoveEmptyList();
    ClearItem();
    SetItem();
});
