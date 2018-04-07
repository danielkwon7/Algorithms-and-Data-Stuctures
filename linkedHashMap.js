var LinkedHashMap = function() {
    this.head = null;
    this.tail = null;
    this.hashMap = {};
}

LinkedHashMap.prototype.get = function(key) {
    var result = this.hashMap[key];
    return result && result.value;
}

LinkedHashMap.prototype.put = function(key, value) {
    var existingNode = this.hashMap[key];
    if (existingNode) {
        existingNode.value = value;
        return;
    }
    var node = {
        key: key,
        value: value,
        next: null,
        prev: null,
    };
    this.hashMap[key] = node;
    if (!this.head) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
}

LinkedHashMap.prototype.delete = function(key) {
    var existingNode = this.hashMap[key];
    if (!existingNode) {
        return;
    }
    delete this.hashMap[key];
    if (existingNode === this.head && existingNode === this.tail) {
        this.head = this.tail = null;
        return;
    }
    if (existingNode === this.head) {
        var next = existingNode.next;
        next.prev = null;
        this.head = next;
        return;
    }
    if (existingNode === this.tail) {
        var prev = existingNode.prev;
        prev.next = null;
        this.tail = prev;
        return;
    }
    existingNode.prev.next = existingNode.next;
    existingNode.next.prev = existingNode.prev;
}

LinkedHashMap.prototype.returnHead = function() {
    return this.head;
}

function firstUniqueWord(words) {
    var seenWords = {};
    var uniqueWords = new LinkedHashMap();
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (seenWords[word]) {
            uniqueWords.delete(word);
            continue;
        }
        seenWords[word] = true;
        uniqueWords.put(word, true);
    }
    var head = uniqueWords.returnHead();
    return head && head.key;
}

firstUniqueWord([]);
firstUniqueWord(['B','B', 'A']);
firstUniqueWord(['B', 'B']);
firstUniqueWord(['B', 'B', 'B']);
firstUniqueWord(['B', 'B', 'B', 'A']);
firstUniqueWord(['A', 'B', 'C']);
firstUniqueWord(['A']);
firstUniqueWord(['A', 'B', 'A']);
firstUniqueWord(['A', 'B', 'A', 'B']);