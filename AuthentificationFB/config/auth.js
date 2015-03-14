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
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};