const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    //  packages 加入编译
    config.module
      .rule('js')
      .include
      .add(resolve('packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
    // markdown文件处理
    const mdRule = config.module.rule('md')
    mdRule
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        preventExtract: true,
        use: [
          [
            require("markdown-it-container"),
            "demo",
            {
              validate: function(params) {
                return params.trim().match(/^demo\s+(.*)$/)
              },
              render(tokens, index) {
                let { nesting, info } = tokens[index]
                if (nesting === 1) {
                  // 1.获取代码块的描述内容
                  let content = info.trim().match(/^demo\s+(.*)$/) || []
                  let description = content.length > 1 ? content[1] : ""
                  var md = require("markdown-it")()
                  if (description) {
                    description = md.render(description)
                  }
                  // 2.获取代码块内的 html 和 js代码
                  content = tokens[index + 1].content
                  // 3.代码块包裹
                  return  `<code-demo>
                    <div class="source" slot="source">${content}</div>
                    ${descriptionHTML}
                    <div class="highlight" slot="highlight">
                  `
                } else {
                  return `</div></code-demo>\n`
                }
              }
            }
          ]
        ]
      })
  }
}
