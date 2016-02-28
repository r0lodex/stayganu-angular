(function() {
    angular
        .module('stayGanu', ['ngResource'])
        .factory('Homestay', Homestay)
        .controller('homestayCtrl', homestayCtrl)

    // ============================================

    function Homestay($resource) {
        return $resource('url')
    }

    function homestayCtrl(Homestay) {
        var vm = this
        vm.hello = 'Assalamualaikum Dunia'
    }
})()