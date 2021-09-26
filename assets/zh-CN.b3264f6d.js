import{_ as s}from"./IconSfc.7d4b9349.js";import{o as a,c as n,a5 as l}from"./vendor.613212a8.js";const t={components:{}},p={class:"varlet-site-doc"},c=[l('<h1>布局</h1><div class="card"><h3>介绍</h3><p>组件库提供了<code>&lt;var-row/&gt;</code>和<code>&lt;var-col/&gt;</code>两个辅助布局的组件，使您更有效率的进行布局。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Row, Col } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Row).use(Col)\n</code></pre></div><div class="card"><h3>栅格系统</h3><p><code>&lt;var-row/&gt;</code>组件把一行平均划分为24列栅格(24份)，<code>&lt;var-col/&gt;</code>提供<code>span</code>属性设置这一列所占的份数，<code>offset</code>属性设置这一列偏移的份数。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n</code></pre></div><div class="card"><h3>偏移</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;16&quot;</span> <span class="hljs-attr">:offset</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>offset: 8 span: 16<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n</code></pre></div><div class="card"><h3>对齐</h3><p>布局组件默认使用<code>flex</code>布局，通过<code>&lt;var-row/&gt;</code>的<code>justify</code>和<code>align</code>属性设置主轴和交叉轴的对齐方式。</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"> <span class="hljs-tag">&lt;<span class="hljs-name">var-row</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;flex-end&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-around&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">justify</span>=<span class="hljs-string">&quot;space-between&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n</code></pre></div><div class="card"><h3>列间距</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-row</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;8&quot;</span>&gt;</span>span: 8<span class="hljs-tag">&lt;/<span class="hljs-name">var-col</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-row</span>&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3></div><div class="card"><h3>Row Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>gutter</code></td><td>列间距</td><td><em>string | number</em></td><td><code>0</code></td></tr><tr><td><code>justify</code></td><td>主轴对齐方式, 可选值为 <code>flex-start</code> <code>flex-end</code> <code>center</code> <code>space-between</code> <code>space-around</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr><tr><td><code>align</code></td><td>交叉轴对齐方式, 可选值为 <code>flex-start</code> <code>flex-end</code> <code>center</code></td><td><em>string</em></td><td><code>flex-start</code></td></tr></tbody></table></div><div class="card"><h3>Col Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>span</code></td><td>列占据的栅格数</td><td><em>string | number</em></td><td><code>24</code></td></tr><tr><td><code>offset</code></td><td>列偏移的栅格数</td><td><em>string | number</em></td><td><code>0</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3></div><div class="card"><h3>Row Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击Row时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Col Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击Col时触发</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3></div><div class="card"><h3>Row Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>Row内容</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Col Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>Col内容</td><td><code>-</code></td></tr></tbody></table></div>',17)];var h=s(t,[["render",function(s,l,t,h,e,o){return a(),n("div",p,c)}]]);export{h as default};
