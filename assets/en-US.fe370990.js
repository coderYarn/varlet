import{_ as s}from"./IconSfc.7d4b9349.js";import{o as a,c as n,a5 as t}from"./vendor.613212a8.js";const l={components:{}},p={class:"varlet-site-doc"},e=[t('<h1>Popup</h1><div class="card"><h3>Intro</h3><p>Create a container that can pop up from top, bottom, left, right and center. <code>teleport</code> inserts into the end of the <code>body</code> by default.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Popup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Popup)\n</code></pre></div><div class="card"><h3>Popup Position</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;center = true&quot;</span>\n&gt;</span>\n  Center Popup\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;bottom = true&quot;</span>\n&gt;</span>\n  Below Popup\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;top = true&quot;</span>\n&gt;</span>\n  Above Popup\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> \n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;left = true&quot;</span>\n&gt;</span>\n  Left Popup\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span> \n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;right = true&quot;</span>\n&gt;</span>\n  Right Popup\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n// Center Popup\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;center&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// Below Popup\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;bottom&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window. \n    It was the sound of a crescendo. \n    He came into her apartment. \n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// Above Popup\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;top&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;top&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// Left Popup\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// Right Popup\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;right&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> center = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> top = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> bottom = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> left = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> right = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      center,\n      top,\n      bottom,\n      left,\n      right\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-selector-class">.mt-10</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;\n}\n\n<span class="hljs-selector-class">.block</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">24px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;\n}\n</code></pre></div><div class="card"><h3>Overlay Style</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayClass = true&quot;</span>\n&gt;</span>\n  Overlay Style\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;overlayStyle = true&quot;</span>\n&gt;</span>\n  Overlay Style\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n// Overlay Class\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> \n  <span class="hljs-attr">overlay-class</span>=<span class="hljs-string">&quot;custom-overlay&quot;</span> \n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayClass&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n\n// Overlay style\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span> \n  <span class="hljs-attr">:overlay-style</span>=<span class="hljs-string">&quot;{\n    backgroundColor: &#39;rgba(0, 0, 0, 0.3)&#39; \n  }&quot;</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;overlayStyle&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> overlayClass = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> overlayStyle = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      overlayClass,\n      overlayStyle\n    }\n  }\n}\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-comment">/* normal css */</span>\n<span class="hljs-selector-class">.custom-overlay</span> {\n  <span class="hljs-attribute">background</span>: <span class="hljs-built_in">rgba</span>(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.3</span>);\n}\n\n<span class="hljs-comment">/* scoped css */</span>\n<span class="hljs-selector-class">.mt-10</span> {\n  <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">10px</span>;\n}\n\n<span class="hljs-selector-class">.block</span> {\n  <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span> <span class="hljs-number">24px</span>;\n  <span class="hljs-attribute">width</span>: <span class="hljs-number">250px</span>;\n}\n</code></pre></div><div class="card"><h3>Events</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;mt-10&quot;</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;event = true&quot;</span>\n&gt;</span>\n  Event\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">var-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;event&quot;</span>\n  @<span class="hljs-attr">open</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;open&#39;)&quot;</span>\n  @<span class="hljs-attr">opened</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;opened&#39;)&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.warning(&#39;close&#39;)&quot;</span>\n  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;closed&#39;)&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;block&quot;</span>&gt;</span>\n    As he came into the window.\n    It was the sound of a crescendo.\n    He came into her apartment.\n    He left the bloodstains on the carpet.\n  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-popup</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> event = ref(<span class="hljs-literal">false</span>)\n\n    <span class="hljs-keyword">return</span> {\n      event,\n      Snackbar\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display the Popup</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>position</code></td><td>Popup position with optional value of <code>top</code> <code>bottom</code> <code>right</code> <code>left</code> <code>center</code></td><td><em>string</em></td><td><code>center</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>transition</code></td><td>Transition animation name</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Popup when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Popup</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Popup to mount</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Popup is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Popup open-animation ends</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Popup is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Popup close-animation ends</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Popup content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--popup-overlay-background-color</code></td><td><code>rgba(0, 0, 0, .6)</code></td></tr><tr><td><code>--popup-content-background-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',11)];var o=s(l,[["render",function(s,t,l,o,c,r){return a(),n("div",p,e)}]]);export{o as default};
