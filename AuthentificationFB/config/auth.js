// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '1571579233109049', // your App ID
        'clientSecret'  : '83a8da20315fd831ceca4cca500959f7', // your App Secret
        'callbackURL'   : 'http://192.168.1.122:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'yWHyXR0QyH5kKBT35xsZXXoYC',
        'consumerSecret'    : 'Fje2TOooorKzJlmQ21wYggpKzPFW4rfeK7ct3h9YfzbakdARYz',
        'callbackURL'       : 'http://192.168.1.122:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1062344543101-0vgll50sfohidbraq06lep0ke9o27ros.apps.googleusercontent.com',
        'clientSecret'  : 'tJ913B0nYs7uWovjPXFUU5GN',
        //edit hosts for no local ip (192.168.....)
        'callbackURL'   : 'http://domain.com:8080/auth/google/callback'
    }

};