function monthTemperatures() {
    var self = this;
    self.temperatures = [];
}

monthTemperatures.prototype = {
    constructor: monthTemperatures,
    addWeek: function(week) {
        var self = this;
        if(self.isArray(week)){
            self.temperatures.push(week);
        } else {
            console.log('Week must be sent as an array');
        }
    },
    average: function() {
        var self = this;
        var total = 0;
        var week = 0;
        var totalWeeks = self.temperatures.length;
        for ( ; week < totalWeeks; week++) {
         total += self.averageForTheWeek(self.temperatures[week]);
        }
        return  Math.floor(total / totalWeeks);
    },
    averageForEveryWeek: function() {
        var self = this;
        var total = 0;
        var week = 0;
        var totalWeeks = self.temperatures.length;
        var weekAverages = [];
        for ( ; week < totalWeeks; week++) {
         weekAverages.push(self.averageForTheWeek(self.temperatures[week]) );
        }
        return  weekAverages;
    },
    averageForTheWeek: function(week){
        var total = 0;
        var average = 0.0;
        var i = 0;
        var length = week.length;
        for(; i < length; i++){
            total += week[i];
        }
        return Math.floor(total / length);
    },
    isArray: function(value){
        if(typeof value.isArray === 'function'){
            return true
        } else {
            return Object.prototype.toString.call(value) === '[object Array]';
        }

    }
}