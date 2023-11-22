import{_ as s,o as e,c as a,a as o}from"./app-4473551c.js";const l={},c=o(`<h1 id="moduleclassloader-class" tabindex="-1"><a class="header-anchor" href="#moduleclassloader-class" aria-hidden="true">#</a> ModuleClassLoader <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModuleClassLoader</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">() : </span><span style="color:#F69D50;">ClassLoader</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.2</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>自动处理 (Xposed) 宿主环境与模块环境的 <code>ClassLoader</code>。</p></blockquote><h2 id="companion-object-object" tabindex="-1"><a class="header-anchor" href="#companion-object-object" aria-hidden="true">#</a> companion object <span class="symbol">- object</span></h2><p><strong>变更记录</strong></p><p><code>v1.1.2</code> <code>新增</code></p><h3 id="excludehostclasses-method" tabindex="-1"><a class="header-anchor" href="#excludehostclasses-method" aria-hidden="true">#</a> excludeHostClasses <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">excludeHostClasses</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> name: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.2</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>添加到 Hook APP (宿主) <code>Class</code> 排除列表。</p></blockquote><p>排除列表中的 <code>Class</code> 将会使用宿主的 <code>ClassLoader</code> 进行装载。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>排除列表仅会在 (Xposed) 宿主环境生效。</p></div><h3 id="excludemoduleclasses-method" tabindex="-1"><a class="header-anchor" href="#excludemoduleclasses-method" aria-hidden="true">#</a> excludeModuleClasses <span class="symbol">- method</span></h3><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">excludeModuleClasses</span><span style="color:#ADBAC7;">(</span><span style="color:#F47067;">vararg</span><span style="color:#ADBAC7;"> name: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"></span></code></pre></div><p><strong>变更记录</strong></p><p><code>v1.1.2</code> <code>新增</code></p><p><strong>功能描述</strong></p><blockquote><p>添加到模块 <code>Class</code> 排除列表。</p></blockquote><p>排除列表中的 <code>Class</code> 将会使用模块 (当前宿主环境的模块注入进程) 的 <code>ClassLoader</code> 进行装载。</p><div class="custom-container danger"><p class="custom-container-title">特别注意</p><p>排除列表仅会在 (Xposed) 宿主环境生效。</p></div>`,25),n=[c];function d(p,t){return e(),a("div",null,n)}const i=s(l,[["render",d],["__file","ModuleClassLoader.html.vue"]]);export{i as default};
