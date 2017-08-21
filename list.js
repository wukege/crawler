module.exports = (() => {
    class List {
        constructor() {
            this.listSize = 0;
            this.pos = 0;
            this.dataStore = [];
        }
        append(element) {
            this.dataStore[this.listSize++] = element;
        }
        find(element) {
            for (let i = 0; i < this.dataStore.length; i++) {
                if (element === this.dataStore[i]) {
                    return i;
                }
            }
            return -1;
        }
        remove(element) {
            let foundAt = this.find(element);
            if (foundAt > -1) {
                this.dataStore.splice(foundAt, 1);
                --this.listSize;
                return true;
            }
            return false;
        }
        length() {
            return this.listSize;
        }

        listToString() {
            return this.dataStore;
        }
        insert(element, after) {
            let insertPos = this.find(after);
            if (insertPos > -1) {
                this.dataStore.splice(insertPos + 1, 0, element)
                ++this.listSize;
                return true;
            }
            return false;
        }
        clear() {
            delete this.dataStore;
            this.dataStore = [];
            this.listSize = this.pos = 0;

        }
        contains(element) {
            for (let i = 0; i < this.dataStore.length; i++) {
                if (element === this.dataStore[i]) {
                    return true;
                }
                return false;
            }
        }

        front() {
            this.pos = 0;
        }
        end() {
            this.pos = this.listSize - 1;
        }
        prev() {
            if (this.pos > 0) {
                --this.pos;
            }
        }
        next() {
            if (this.pos < this.listSize - 1) {
                ++this.pos;
            }
        }
        currPos() {
            return this.pos;
        }
        moveTo(position) {
            this.pos = position
        }
        getElement() {
            return this.dataStore[this.pos];
        }
    }
    return new List
})()















