### WebPlayer UI Remover

This Extension removes the WebPlayer UI for specific Streaming Services to ensure an undisturbed viewer experience.

#### Currently Supporting:

-   Amazon
-   Netflix

---

#### How to use

Simply press the Extension Action Button on the stream to delete the WebPlayer UI elements.
(You need to reload the Site to reset)

---

#### How to add to the Browser

Download the [Release](https://github.com/m-grohs/WPUIREM/releases) for your Browser.

-   Firefox (\*.xpi)

    ```
    This File will directly install the Extension into Firefox
    ```

-   Firefox (\*.zip)

    ```
    Open Add-ons and Themes
    or
    Extension Action Button -> Manage Extension

    Use the Cogwheel -> Install Add-on from File
    ```

-   Chrome

    ```
    Options -> Extension -> Manage Extensions
    or
    Extension Action Button -> Manage Extension

    Load Unpacked and Pick the Folder where you unziped the Extension
    ```

No other Browser support available atm (might work on Edge but is untested).

---

#### Notes

There are some differences between Firefox and Chrome in the manifest.json [^2]

Firefox:

-   FF does not support Service Worker and still uses Background Scripts

```json
"background": {
	"scripts": ["./bg.js"]
},
```

-   for a manifest v3 extension an ID is essential for signing.

```json
"browser_specific_settings": {
	"gecko": {
		"id": "UNIQUE_IDENTIFIER"
	}
}
```

Chrome:

-   uses Service Worker in v3

```json
"background": {
	"service_worker": "./service_worker.js",
	"type": "module"
}
```

---

#### [LICENSE]()

[^1]: There is no Published Version in any Web Store nor is it planned at this point in time.
[^2]: On very rare occasions FF none persistance scripts like this one can fail to "wake up". Refresh the Browser if that happens.
