import{_ as t}from"./IconSfc.7d4b9349.js";import{o as s,c as d,a5 as a}from"./vendor.613212a8.js";const e={components:{}},c={class:"varlet-site-doc"},n=[a('<h1>卡片</h1><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Card } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Card)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;风景&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>显示副标题</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;风景&quot;</span>\n  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;公园里的风景&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>显示图片</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;风景&quot;</span>\n  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;公园里的风景&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>\n/&gt;</span>\n</code></pre></div><div class="card"><h3>使用插槽</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;风景&quot;</span>\n  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;公园里的风景&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat.jpg&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">extra</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;margin-right: 10px&quot;</span>&gt;</span>添加按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>添加按钮<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-card</span>&gt;</span>\n</code></pre></div><div class="card"><h3>水波效果</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-card</span>\n  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;风景&quot;</span>\n  <span class="hljs-attr">subtitle</span>=<span class="hljs-string">&quot;公园里的风景&quot;</span>\n  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;公园的树林也很美。在公园的小山上栽满了树木，梧桐树的叶子随着时间的流逝慢慢变黄，纷纷飘落；枫树的叶子却变红了，公园笼罩在片片红云中，也使秋天增添了一分热情。而柏树的叶子仍是那么青翠欲滴，令你陶醉极了。山上有一群孩子在快乐的嬉戏，不时传来阵阵欢笑声，瞧，他们玩得多起劲呀，给树林增添了活力。&quot;</span>\n  <span class="hljs-attr">ripple</span>\n/&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>卡片标题</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>subtitle</code></td><td>卡片副标题</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>卡片描述</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>elevation</code></td><td>卡片阴影程度等级</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>src</code></td><td>图片地址</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>fit</code></td><td>填充模式, 可选值为 <code>fill</code> <code>contain</code> <code>cover</code> <code>none</code> <code>scale-down</code></td><td><em>string</em></td><td><code>cover</code></td></tr><tr><td><code>alt</code></td><td>替代文本</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>height</code></td><td>图片高度</td><td><em>string | number</em></td><td><code>-</code></td></tr><tr><td><code>ripple</code></td><td>是否开启水波</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>image</code></td><td>自定义图片</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>自定义标题</td><td><code>-</code></td></tr><tr><td><code>subtitle</code></td><td>自定义副标题</td><td><code>-</code></td></tr><tr><td><code>description</code></td><td>自定义描述</td><td><code>-</code></td></tr><tr><td><code>extra</code></td><td>自定义底部内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击卡片时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider 组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--card-padding</code></td><td><code>0 0 10px 0</code></td></tr><tr><td><code>--card-border-radius</code></td><td><code>4px</code></td></tr><tr><td><code>--card-image-width</code></td><td><code>100%</code></td></tr><tr><td><code>--card-image-height</code></td><td><code>200px</code></td></tr><tr><td><code>--card-title-color</code></td><td><code>#333</code></td></tr><tr><td><code>--card-title-font-size</code></td><td><code>20px</code></td></tr><tr><td><code>--card-title-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--card-title-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--card-subtitle-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--card-subtitle-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--card-subtitle-padding</code></td><td><code>0 13px</code></td></tr><tr><td><code>--card-subtitle-margin</code></td><td><code>10px 0 0 0</code></td></tr><tr><td><code>--card-description-color</code></td><td><code>rgba(0, 0, 0, 0.6)</code></td></tr><tr><td><code>--card-description-font-size</code></td><td><code>14px</code></td></tr><tr><td><code>--card-description-margin</code></td><td><code>20px 0 0 0</code></td></tr><tr><td><code>--card-description-padding</code></td><td><code>0 13px</code></td></tr><tr><td><code>--card-footer-padding</code></td><td><code>0 12px</code></td></tr><tr><td><code>--card-footer-margin</code></td><td><code>30px 0 0px 0</code></td></tr><tr><td><code>--card-line-height</code></td><td><code>22px</code></td></tr></tbody></table></div>',12)];var r=t(e,[["render",function(t,a,e,r,o,l){return s(),d("div",c,n)}]]);export{r as default};
