gesturesApp.factory('modes.modesService', function() {
   var modes = [{
       name: 'Speed Attack',
       state: 'speed-attack'
   }];
   
   return {
       getList: function() {
           return modes;
       }
   };
});