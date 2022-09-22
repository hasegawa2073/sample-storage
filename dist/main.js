import { AddList } from './modules/AddList/AddList.js';
import { RemoveEmptyList } from './modules/RemoveEmptyList/RemoveEmptyList.js';
import { ClearItem } from './modules/ClearItem/ClearItem.js';
import { SetItem } from './modules/SetItem/SetItem.js';
document.addEventListener('DOMContentLoaded', () => {
    AddList();
    RemoveEmptyList();
    ClearItem();
    SetItem();
});
