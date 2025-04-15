#### **TO BUILD A REACT APP:**

###### npx expo export -p web

#### **TO TEST THE WEB BUILD:**

###### npx serve web-build

#### **INSIDE APP.JSON BELOW OBJECT USED TO DECLARE THE BASE URL OF OUR APPLICATION**

```javascript
"experiments": {
  "baseUrl": "/rc-worker"
},
```

## IMPORTANT

##### One of the file inside Expo Blur npm has forgot to import react. Should manually do after install the react native packages. File name - explo-blur -> build -> BlurView.web.js