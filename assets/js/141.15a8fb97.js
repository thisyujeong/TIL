(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{563:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"리액트-개발환경에서-cors-이슈-해결하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리액트-개발환경에서-cors-이슈-해결하기"}},[t._v("#")]),t._v(" 리액트 개발환경에서 CORS 이슈 해결하기")]),t._v(" "),a("h2",{attrs:{id:"http-proxy-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-proxy-middleware"}},[t._v("#")]),t._v(" http-proxy-middleware")]),t._v(" "),a("p",[t._v("리액트 개발환경에서 프록시(Proxy) 설정을 통해 CORS 이슈를 해결할 수 있다.")]),t._v(" "),a("h2",{attrs:{id:"cors란"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors란"}},[t._v("#")]),t._v(" CORS란?")]),t._v(" "),a("blockquote",[a("p",[t._v("CORS(Cross-Origin Resource Sharing)는 클라이언트와 서버의 포트가 다른 상태에서 클라이언트 측에서 서버 측으로 무언가를 요청했을 때 브라우저가 보안상의 이유로 요청을 차단하는 문제이다. 가령 클라이언트의 포트가 3000이고 서버 측의 포트가 8080이라면 보안상의 이유로 차단된다.")])]),t._v(" "),a("h2",{attrs:{id:"프록시를-사용하는-이유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#프록시를-사용하는-이유"}},[t._v("#")]),t._v(" 프록시를 사용하는 이유")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("회사의 직원들이나 집 안의 아이들이 특정 사이트를 들어갈 수 없도록 방지하기 위함")]),t._v(" "),a("li",[t._v("캐쉬를 이용해 더 빠른 인터넷 이용 제공"),a("br"),t._v("\n프록시 서버는 서버 측의 정적 이미지 등을 저장시켜 놓을 수 있기 때문에 굳이 서버까지 가지 않아도 프록시 서버를 통해 더욱 빠르게 이미지를 접근할 수 있다.")]),t._v(" "),a("li",[t._v("더 나은 보안 제공"),a("br"),t._v("\nIP를 바꿔서 보내줄 수 있기 때문")])])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" install")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install http-proxy-middleware --save\nyarn add http-proxy-middleware --save\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/setupProxy.js")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createProxyMiddleware "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http-proxy-middleware'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createProxyMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:8080'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      changeOrigin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("setupProxy.js 파일을 src 폴더에 생성해 프로젝트 proxy 설정을 커스터마이징 한다. 본 예제에서는 클라이언트 포트를 서버 포트로 설정해주어야 하기 때문에 "),a("code",[t._v("target")]),t._v("의 "),a("code",[t._v("value")]),t._v("값을 클라이언트 서버 포트인 "),a("code",[t._v("8080")]),t._v("으로 설정해주었다.")]),t._v(" "),a("p",[t._v("공식문서 바로가기 "),a("a",{attrs:{href:"https://create-react-app.dev/docs/proxying-api-requests-in-development/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create React App - Proxying in Development"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);