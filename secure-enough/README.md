Secure enough
=============
![Spotify Logo](../resources/spotify-logo.png)

Some disturbing reports have been received at our support department.

**Points: 1**

* A user claims that he is able to change the Spotify password for any user.

An emergency report has been created, and the developer responsible of the only
entry point, server side, where the password change operation is completed in our website, has reviewed the code.

* **Our developer claims that our code is secure enough** as it allows only valid users to change
their password.

* ```isLoggedIn``` and ```getAndFilterParam``` are properly implemented, the problem is somewhere else.

* The fragment of code provided, is where the problem must be. **Hint:** This code, can be triggered
via a URL: e.g. https://test.tld/ChangePassword/change

You are responsible of identifying what's wrong with the following code, and tell us
what would it be a plausible scenario for an attack vector.


Fragment of our server side validation code
===========================================

```javascript
/**
 * Server side view logic implementation.
 *
 * @method changePassword
 * @public
 * @param {Function} onSuccess
 * @param {Function} onError
 */
ChangePasswordView.prototype.change = function(onSuccess, onError) {

    try {

        // Note: we know for sure that isLoggedIn method works correctly
        if (Spotify.User.isLoggedIn()) {

            // Note: getAndFilterParam method is properly implemented
            Spotify.User.changePassword(Spotify.Submit.getAndFilterParam('password', Spotify.Submit.GET));

            if (typeof onSuccess === 'function') {
                onSuccess();
            }

        } else {

            if (typeof onError === 'function') {
                onError(Spotify.Error.YouMustBeLoggedIn);
            }

        }

    } catch (e) {
        // e.g. InvalidParameterException
        if (typeof onError === 'function') {
            onError();
        }
    }

};
```
