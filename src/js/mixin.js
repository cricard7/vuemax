export const someMixin = {

    data() {
        return {
            mixinName: "From The Mixin"
        }
    
    },

    methods: {
        allCaps: function(str){
            // returns the string passed in to all upper case
            var upperstr = str.toUpperCase();

            return upperstr
        }

    }
}