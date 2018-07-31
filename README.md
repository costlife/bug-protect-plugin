## Install
> npm install --save-dev bug-protect-plugin

## Usage
> In your webpack-config.js, just easily import 'bug-protect-plugin' and add it to plugins like below
```javasript
  const BugProtectPlugin = require('bug-protect-plugin');
  const path = require('path');
  module.exports = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'webpack.bundle.js'
    },
    plugins: [
      new BugProtectPlugin()
    ]
  };
```

## Demo
```
                    _ooOoo_
                   o8888888o
                   88" . "88
                   (| -_- |)
                    O\ = /O
                ____/`---`\____
              .   ' \\| |// '   .
               / \\||| : |||// \
             / _||||| -:- |||||- \
               | | \\\ - /// | |
             | \_| ''\---/'' | |
              \ .-\__ `-` ___/-. /
           ___`. . /--.--\ `. . __
        .""  < `.___\_<|>_/___.` >\  "".
       | | : `- \`.;`\ _ /`;.`/ - ` : | |
         \ \ `-. \_ __\ /__ _/ .-` / /
 ======`-.____`-.___\_____/___.-`____.-`======
                    `=---=`
 .............................................
 .............佛祖保佑....永无BUG.............
```

