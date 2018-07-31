const pluginName = 'BugProtectPlugin';

class BugProtectPlugin {
  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.run.tap(pluginName, echo);
    } else {
      compiler.plugin('done', echo);
    }
  }
}

function echo(compilation) {
  console.log('')
  console.log('')
  console.log('                    _ooOoo_')
  console.log('                   o8888888o')
  console.log('                   88" . "88')
  console.log('                   (| -_- |)')
  console.log('                    O\\ = /O')
  console.log('                ____/`---`\\____')
  console.log('              .   \' \\| |// \'   .')
  console.log('               / \\||| : |||// \\')
  console.log('             / _||||| -:- |||||- \\')
  console.log('               | | \\\ - /// | |')
  console.log("             | \\_| ''\\---/'' | |")
  console.log('              \\ .-\\__ `-` ___/-. /')
  console.log('           ___`. . /--.--\\ `. . __')
  console.log('        .""  < `.___\\_<|>_/___.` >\\  "".')
  console.log('       | | : `- \\`.;`\\ _ /`;.`/ - ` : | |')
  console.log('         \\ \\ `-. \\_ __\\ /__ _/ .-` / /')
  console.log(' ======`-.____`-.___\\_____/___.-`____.-`======')
  console.log('                    `=---=`')
  console.log('')
  console.log(' .............................................')
  console.log(' .............佛祖保佑....永无BUG...............')
  console.log('')
}
module.exports = BugProtectPlugin