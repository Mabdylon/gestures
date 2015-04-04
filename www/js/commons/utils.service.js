gesturesApp.factory('commons.utils.service', ['localStorageService',
    function(localStorageService) {

        var initOrLoadValue = function(id, defaultValue) {
            var storageValue = localStorageService.get(id);
            if(!storageValue) {
                storageValue = defaultValue;
            }
            return storageValue;
        };

        var initOrLoadIntValue = function(id) {
            return initOrLoadValue(id, 0);
        };

        var initOrLoadBooleanValue = function(id) {
            return initOrLoadValue(id, false);
        };

        var initOrLoadArrayValue = function(id) {
            return initOrLoadValue(id, []);
        };

        var initOrLoadObjectValue = function(id) {
            return initOrLoadValue(id, {});
        };

        return {
            initOrLoadIntValue: initOrLoadIntValue,
            initOrLoadBooleanValue: initOrLoadBooleanValue,
            initOrLoadArrayValue: initOrLoadArrayValue,
            initOrLoadObjectValue: initOrLoadObjectValue
        };

    }]);