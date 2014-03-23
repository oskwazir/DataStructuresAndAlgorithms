function monthTemperatures() {
    var self = this;
    self.dataStore = [];
    self.add = add;
    self.average = average;
}

monthTemperatures.prototype = {
    constructor: monthTemperatures,
    add: function(temp) {
        var self = this;
        self.dataStore.push(temp);
    },
    average: function() {
        var total = 0;
        for (var i = 0; i < self.dataStore.length; ++i) {
         total += self.dataStore[i];
        }
        return total / self.dataStore.length;
    }
}