const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path')

// 是否使用gzip
const productionGzip = true
// 需要gzip压缩的文件后缀
const productionGzipExtensions = ['js', 'css']

module.exports = {
  publicPath: './',
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  //解决打包时,报错问题  https://github.com/QingWei-Li/vue-markdown-loader/issues/61
  parallel: false,
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
      .set('src', path.resolve('src'))
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/)
      .end()
      .include.add(/examples/)
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
    //markdown
    config.module
      .rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .loader(path.resolve(__dirname, './md-loader/index.js'))//element-ui的md处理在md-loader中,这里没有使用.处理方式在下面
    if (process.env.NODE_ENV === 'production') {
      // 启用GZip压缩
      productionGzip && new CompressionPlugin({
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 8192,
        minRatio: 0.8
      })
    }
  }
}