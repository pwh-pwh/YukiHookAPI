import{_ as s,o as a,c as n,a as o}from"./app-4473551c.js";const l={},p=o(`<div class="custom-container warning"><p class="custom-container-title">Notice</p><p>The English translation of this page has not been completed, you are welcome to contribute translations to us.</p><p>You can use the <strong>Chrome Translation Plugin</strong> to translate entire pages for reference.</p></div><h1 id="ylogdata-class" tabindex="-1"><a class="header-anchor" href="#ylogdata-class" aria-hidden="true">#</a> YLogData <span class="symbol">- class</span></h1><div class="language-kotlin" data-ext="kt"><pre class="shiki github-dark-dimmed" style="background-color:#22272e;" tabindex="0"><code><span class="line"><span style="color:#F47067;">data</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">YLogData</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">internal</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">constructor</span><span style="color:#ADBAC7;">(</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> timestamp: </span><span style="color:#F69D50;">Long</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> time: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> tag: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> priority: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> packageName: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> userId: </span><span style="color:#F69D50;">Int</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> msg: </span><span style="color:#F69D50;">String</span><span style="color:#ADBAC7;">,</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">var</span><span style="color:#ADBAC7;"> throwable: </span><span style="color:#F69D50;">Throwable</span><span style="color:#ADBAC7;">?</span></span>
<span class="line"><span style="color:#ADBAC7;">) : </span><span style="color:#F69D50;">Serializable</span></span>
<span class="line"></span></code></pre></div><p><strong>Change Records</strong></p><p><code>v1.2.0</code> <code>added</code></p><p><strong>Function Illustrate</strong></p><blockquote><p>调试日志数据实现类。</p></blockquote>`,7),e=[p];function t(r,c){return a(),n("div",null,e)}const i=s(l,[["render",t],["__file","YLogData.html.vue"]]);export{i as default};
