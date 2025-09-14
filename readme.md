## ZenStream

ZenStream is an Extension that removes distracting Web Player Interfaces on specific streaming Sites, creating a clean and immersive viewing experience.

### Currently Supporting:

-   Amazon
-   Disney+
-   Netflix
-   Wowtv.de

### How to use

Press the Extension Button on supported Stream Sites to remove the Stream Interface.
Reload the Site to Undo this.

### How to add to the Browser

Download the [Release](https://github.com/m-grohs/ZenStream/releases) for your Browser. [^1]

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

    <small>No other Browser support available. 
    (might work on other Firefox/Chrome base Browser but has not been tested.)</small>

---

### Notes

There are some differences between Firefox and Chrome in the manifest.json.

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

-   uses Service Worker in manifest v3

```json
"background": {
	"service_worker": "./service_worker.js",
	"type": "module"
}
```

Git Clone: 
-   rename the manifest-chrome.json or manifest-firefox.json to manifest.json depending on your Browser.

---

<small>© 2025 [m-grohs](https://github.com/m-grohs)

[^1]: There is no published Version in the Chrome Web Store nor is it planned at this point in time.

</small>