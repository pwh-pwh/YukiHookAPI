import{_ as e,o as s,c as n,a}from"./app-4473551c.js";const o={},l=a(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="modulepreferencefragment-class" tabindex="-1"><a class="header-anchor" href="#modulepreferencefragment-class" aria-hidden="true">#</a> ModulePreferenceFragment <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">abstract</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">ModulePreferenceFragment</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">PreferenceFragmentCompat</span><span style="color:#ADBAC7;">(), SharedPreferences.OnSharedPreferenceChangeListener</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.78</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>这是对使用 <code>YukiHookAPI</code> Xposed 模块实现中的一个扩展功能。</p></blockquote><p>此类接管了 <code>PreferenceFragmentCompat</code> 并对其实现了 Sp 存储在 Xposed 模块中的全局可读可写。</p><p>在你使用 <code>PreferenceFragmentCompat</code> 的实例中，将继承对象换成此类。</p><p>然后请将重写方法由 <code>onCreatePreferences</code> 替换为 <code>onCreatePreferencesInModuleApp</code> 即可。</p><p><strong>Function Example</strong></p><p>使用 <code>ModulePreferenceFragment</code> 创建一个 <code>PreferenceFragmentCompat</code> 对象。</p><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SettingsFragment</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">ModulePreferenceFragment</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreatePreferencesInModuleApp</span><span style="color:#ADBAC7;">(savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?, rootKey: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#DCBDFB;">setPreferencesFromResource</span><span style="color:#ADBAC7;">(R.xml.settings_preferences, rootKey)</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其余用法与 <code>PreferenceFragmentCompat</code> 保持一致。</p><h2 id="oncreatepreferencesinmoduleapp-method" tabindex="-1"><a class="header-anchor" href="#oncreatepreferencesinmoduleapp-method" aria-hidden="true">#</a> onCreatePreferencesInModuleApp <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">abstract</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreatePreferencesInModuleApp</span><span style="color:#ADBAC7;">(savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?, rootKey: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">?)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.78</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>对接原始方法 <code>onCreatePreferences</code>。</p></blockquote><h2 id="onsharedpreferencechanged-method" tabindex="-1"><a class="header-anchor" href="#onsharedpreferencechanged-method" aria-hidden="true">#</a> onSharedPreferenceChanged <span class="symbol">- method</span></h2><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onSharedPreferenceChanged</span><span style="color:#ADBAC7;">(sharedPreferences: </span><span style="color:#F69D50;">SharedPreferences</span><span style="color:#ADBAC7;">?, key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">?)</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.0.78</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>实现了 <code>SharedPreferences.OnSharedPreferenceChangeListener</code> 的原生监听功能。</p></blockquote><p><strong>Function Example</strong></p><div class="custom-container warning"><p class="custom-container-title">Notice</p><p>在使用 <strong>onSharedPreferenceChanged</strong> 时请保留 super 方法。</p></div><blockquote><p>The following example</p></blockquote><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SettingsFragment</span><span style="color:#ADBAC7;"> : </span><span style="color:#F69D50;">ModulePreferenceFragment</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onCreatePreferencesInModuleApp</span><span style="color:#ADBAC7;">(savedInstanceState: </span><span style="color:#F69D50;">Bundle</span><span style="color:#ADBAC7;">?, rootKey: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// ...</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">override</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">fun</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">onSharedPreferenceChanged</span><span style="color:#ADBAC7;">(sharedPreferences: </span><span style="color:#F69D50;">SharedPreferences</span><span style="color:#ADBAC7;">?, key: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">?) {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#6CB6FF;">super</span><span style="color:#ADBAC7;">.</span><span style="color:#DCBDFB;">onSharedPreferenceChanged</span><span style="color:#ADBAC7;">(sharedPreferences, key)</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// Your code here.</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),r=[l];function p(c,t){return s(),n("div",null,r)}const i=e(o,[["render",p],["__file","ModulePreferenceFragment.html.vue"]]);export{i as default};
