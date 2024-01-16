import{_ as s,c as i,o as a,U as n}from"./chunks/framework.WKpLpN6N.js";const g=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"rime/luaHome.md","filePath":"librime-lua.wiki/Home.md"}'),l={name:"rime/luaHome.md"},e=n(`<p>Welcome to the librime-lua wiki!</p><h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="weasel" tabindex="-1">weasel <a class="header-anchor" href="#weasel" aria-label="Permalink to &quot;weasel&quot;">​</a></h2><ol><li><p>Prepare <a href="https://github.com/hchunhui/librime-lua#build" target="_blank" rel="noreferrer">the compiled file</a> (or the latest artifact in <a href="https://github.com/hchunhui/librime-lua/actions" target="_blank" rel="noreferrer">actions</a>).</p></li><li><p>Extract <code>rime-xxxx-Windows.7z/dist/lib/rime.dll</code> file and overwrite it to the <code>rime.dll</code> file under the weasel installation directory.</p></li></ol><h1 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h1><ol><li><p>Create <code>PATH_TO_RIME_USER_DATA_DIR/rime.lua</code>:</p><div class="language-lua vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> date_translator</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input, seg)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (input </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      --- Candidate(type, start, end, text, comment)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Candidate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;date&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, seg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, seg.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">os.date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%Y年%m月%d日&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; 日期&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> single_char_first_filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(input)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cand </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">iter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">utf8.len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cand.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cand)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      else</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">         table.insert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l, cand)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i, cand </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ipairs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(l) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      yield</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cand)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div><p>More sample: <a href="https://github.com/hchunhui/librime-lua/tree/master/sample/rime.lua" target="_blank" rel="noreferrer">rime.lua</a></p><p>Documentation: <a href="https://github.com/hchunhui/librime-lua/wiki/Scripting" target="_blank" rel="noreferrer">wiki</a></p></li><li><p>Reference Lua functions in your schema:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">engine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  ...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  translators</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lua_translator@date_translator</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lua_translator@other_lua_function1</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  filters</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lua_filter@single_char_first_filter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lua_filter@other_lua_function2</span></span></code></pre></div></li><li><p>Deploy &amp; try</p></li></ol><h1 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h1><h2 id="build-dependencies" tabindex="-1">Build dependencies <a class="header-anchor" href="#build-dependencies" aria-label="Permalink to &quot;Build dependencies&quot;">​</a></h2><ul><li>librime &gt;= 1.5.0</li><li>LuaJIT 2 / Lua 5.1 / Lua 5.2 / Lua 5.3 / Lua 5.4</li></ul><h2 id="instructions" tabindex="-1">Instructions <a class="header-anchor" href="#instructions" aria-label="Permalink to &quot;Instructions&quot;">​</a></h2><ol><li><p>Prepare source code</p><p>Move the source to the <code>plugins</code> directory of librime:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mv librime-lua $PATH_TO_RIME_SOURCE/plugins/lua</span></span></code></pre></div><p>Or you can use the <code>install-plugins.sh</code> script to automatically fetch librime-lua:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd $PATH_TO_RIME_SOURCE</span></span>
<span class="line"><span>bash install-plugins.sh hchunhui/librime-lua</span></span></code></pre></div></li><li><p>Install dependencies</p><p>Install development files of Lua:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># For Debian/Ubuntu:</span></span>
<span class="line"><span>sudo apt install liblua5.3-dev   # or libluajit-5.1-dev</span></span></code></pre></div><p>The build system will use <code>pkg-config</code> to search Lua.</p><p>The build system also supports building Lua from source in the <code>thirdparty</code> directory. The <code>thirdparty</code> directory can be downloaded using the following commands:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>cd $PATH_TO_RIME_SOURCE/plugins/lua</span></span>
<span class="line"><span>git clone https://github.com/hchunhui/librime-lua.git -b thirdparty --depth=1 thirdparty</span></span></code></pre></div></li><li><p>Build</p><p>Follow the librime&#39;s build instructions.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># On Linux, merged build</span></span>
<span class="line"><span>make merged-plugins</span></span>
<span class="line"><span>sudo make install</span></span></code></pre></div><p>For more information on RIME plugins, see <a href="https://github.com/rime/librime/tree/master/sample" target="_blank" rel="noreferrer">here</a>.</p></li></ol>`,11),t=[e];function p(h,k,r,d,o,c){return a(),i("div",null,t)}const E=s(l,[["render",p]]);export{g as __pageData,E as default};