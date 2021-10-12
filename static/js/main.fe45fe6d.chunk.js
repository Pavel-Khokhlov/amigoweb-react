(this["webpackJsonpamigoweb-react"]=this["webpackJsonpamigoweb-react"]||[]).push([[0],{22:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),o=t.n(r),s=t(10),l=(t(22),t(4)),i=t(8),u=Object(i.b)({name:"app",initialState:{isPopupOpen:!1,status:null,errors:null},reducers:{handlePopup:function(e,a){e.isPopupOpen=a.payload}}}),b=u.actions.handlePopup,p=u.reducer,j=/^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451]+[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451 -]+$/,d=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,m=/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,O=(t(28),t(1)),h=function(e){var a=e.labelName,t=e.inputName,n=e.type,c=e.onInput,r=e.value,o=e.errors,s=e.placeholder;return Object(O.jsxs)("div",{className:"input",children:[Object(O.jsx)("label",{className:"input__label",children:a}),Object(O.jsx)("input",{type:n,name:t,id:t,className:"input__field input__field_border",onInput:c,value:r,placeholder:s}),Object(O.jsx)("p",{className:"input__error",children:o})]})},_=(t(30),function(e){var a=e.type,t=e.className,n=e.onClick,c=e.children,r=e.isValid;return Object(O.jsx)("button",{disabled:r,type:a,className:t,onClick:n,children:c})}),g=(t(31),t(6)),v=t(3),x=Object(i.b)({name:"form",initialState:{currentLanguage:"\u042f\u0437\u044b\u043a",languageList:["\u0420\u0443\u0441\u0441\u043a\u0438\u0439","\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439","\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439","\u0418\u0441\u043f\u0430\u043d\u0441\u043a\u0438\u0439"],isLanguageListOpen:!1,values:{name:"",email:"",phone:""},errors:{name:!1,email:!1,phone:!1},selectLang:!1,checkboxReg:!1,isFormValid:!1},reducers:{handleValuesChange:function(e,a){e.values=Object(v.a)(Object(v.a)({},e.values),{},Object(g.a)({},a.payload.name,a.payload.value))},validateMessage:function(e,a){return"name"===a.payload?0===e.values.name.length?void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f"))):j.test(e.values.name)?void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,!0))):void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u044b, - \u0438 \u043f\u0440\u043e\u0431\u0435\u043b"))):"email"===a.payload?0===e.values.email.length?void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail"))):d.test(e.values.email)?void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,!0))):void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 E-mail"))):"phone"===a.payload?0===e.values.phone.length?void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u0412\u0432\u0435\u0441\u0442\u0438 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"))):m.test(e.values.phone)?e.values.phone.length<10?void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 10 \u0446\u0438\u0444\u0440"))):void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,!0))):void(e.errors=Object(v.a)(Object(v.a)({},e.errors),{},Object(g.a)({},a.payload,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u044c\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b, - / + / () \u0438 \u043f\u0440\u043e\u0431\u0435\u043b"))):void 0},toggleLanguageListOpen:function(e){e.isLanguageListOpen=!e.isLanguageListOpen},setCurrentLanguage:function(e,a){e.currentLanguage=a.payload,e.selectLang=!0},toggleCheckboxReg:function(e){e.checkboxReg=!e.checkboxReg},validateForm:function(e){e.isFormValid=!0===e.errors.name&&!0===e.errors.email&&!0===e.errors.phone&&!0===e.selectLang&&!0===e.checkboxReg},resetForm:function(e){e.isFormValid=!1,e.values={name:"",email:"",phone:""},e.errors={name:!1,email:!1,phone:!1},e.currentLanguage="\u042f\u0437\u044b\u043a",e.selectLang=!1,e.checkboxReg=!1}}}),f=x.actions,N=f.handleValuesChange,y=f.toggleLanguageListOpen,L=f.setCurrentLanguage,k=f.toggleCheckboxReg,C=f.validateMessage,w=f.validateForm,F=f.resetForm,R=x.reducer;t(32);var P=function(e){var a=e.labelName,t=Object(l.b)(),n=Object(l.c)((function(e){return e.form})),c=n.languageList,r=n.currentLanguage,o=n.isLanguageListOpen,s=function(){t(y())},i=function(e){t(L(e.target.innerText))},u="select__list ".concat(o?"select__list_active":"");return Object(O.jsxs)("div",{className:"select input",children:[Object(O.jsx)("label",{className:"input__label",children:a}),Object(O.jsxs)("div",{className:"select__header",children:[Object(O.jsx)("input",{className:"select__input input__field input__field_border",onFocus:s,onBlur:s,value:r,readOnly:!0}),Object(O.jsx)("div",{className:"select__icon"}),Object(O.jsx)("ul",{className:u,children:c.map((function(e){return Object(O.jsx)("li",{className:"select__item",onClick:i,children:e},e)}))})]})]})},V=Object(i.b)({name:"users",initialState:{currentUser:{}},reducers:{setCurrentUser:function(e,a){e.currentUser=a.payload,e.status=!0}}}),A=V.actions.setCurrentUser,E=V.reducer,I=function(){var e=Object(l.b)(),a=Object(l.c)((function(e){return e.form})).checkboxReg;var t="button__checkbox ".concat(a?"button__checkbox_active":"");return Object(O.jsxs)("div",{className:"form__text form__text_checkbox",children:[Object(O.jsx)(_,{type:"button",className:t,onClick:function(a){e(k()),e(w())}}),Object(O.jsx)("p",{className:"form__paragraph",children:"\u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e"}),Object(O.jsx)(s.b,{to:"/conditions",className:"button button__word",children:"\u0443\u0441\u043b\u043e\u0432\u0438\u044f"}),Object(O.jsx)("p",{className:"form__paragraph",children:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"})]})},U=function(){var e=Object(l.b)(),a=Object(l.c)((function(e){return e.form})),t=a.values,n=a.currentLanguage,c=a.errors,r=a.isFormValid,o="button__submit ".concat(r?"button__submit_valid":"button__submit_invalid"),i=function(a){e(N({name:a.target.name,value:a.target.value})),e(C(a.target.name)),e(w())},u=function(a){a.preventDefault(),e(A({phone:t.phone,name:t.name,email:t.email,language:n})),e(F()),e(b(!0))};return Object(O.jsx)("section",{className:"form",children:Object(O.jsxs)("div",{className:"form__container",children:[Object(O.jsx)("h2",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(O.jsxs)("div",{className:"form__text form__text_redirect",children:[Object(O.jsx)("p",{className:"form__paragraph",children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?"}),Object(O.jsx)(s.b,{to:"/signin",className:"button button__word",children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(O.jsxs)("form",{onSubmit:u,className:"form__body",children:[Object(O.jsx)(h,{type:"text",inputName:"name",labelName:"\u0418\u043c\u044f",value:t.name||"",onInput:i,errors:c.name,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),Object(O.jsx)(h,{type:"email",inputName:"email",labelName:"Email",value:t.email||"",onInput:i,errors:c.email,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"}),Object(O.jsx)(h,{type:"tel",inputName:"phone",labelName:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:t.phone||"",onInput:i,errors:c.phone,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(O.jsx)(P,{labelName:"\u042f\u0437\u044b\u043a"}),Object(O.jsx)(I,{}),Object(O.jsx)(_,{type:"button",className:o,onClick:u,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})})},S=(t(37),function(){var e=Object(l.b)(),a=Object(l.c)((function(e){return e.user})).currentUser,t=Object(l.c)((function(e){return e.app})).isPopupOpen,n=function(){e(b(!1))},c="popup ".concat(t?"popup_opened":"popup_closed"),r="popup__container ".concat(t?"popup__container_opened":"popup__container_closed");return Object(O.jsx)("section",{className:c,onClick:n,children:Object(O.jsxs)("div",{className:r,onClick:function(e){return e.stopPropagation()},children:[Object(O.jsx)(_,{type:"button",className:"button button__close-popup",onClick:n}),Object(O.jsx)("h2",{children:"Current User"}),Object(O.jsx)("p",{children:a.name}),Object(O.jsx)("p",{children:a.email}),Object(O.jsx)("p",{children:a.phone}),Object(O.jsx)("p",{children:a.language})]})})});var Z=function(){var e=Object(l.b)(),a=function(a){27===a.keyCode&&e(b(!1))};return Object(l.c)((function(e){return e.app})).isPopupOpen?window.addEventListener("keydown",a):window.removeEventListener("keydown",a),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(U,{}),Object(O.jsx)(S,{})]})},M=Object(i.a)({reducer:{app:p,form:R,user:E}});o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(l.a,{store:M,children:Object(O.jsx)(Z,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.fe45fe6d.chunk.js.map