(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{293:function(e,t,a){e.exports={profileInfoContainer:"ProfileInfo_profileInfoContainer__3eP6u",descriptionBlock:"ProfileInfo_descriptionBlock__3TW3C",contactsDataContainer:"ProfileInfo_contactsDataContainer__1MP1x",contact:"ProfileInfo_contact__1jxr3"}},294:function(e,t,a){e.exports={addTextForm:"TextareaStyle_addTextForm__3AM8i"}},295:function(e,t,a){e.exports={profileStatusContainer:"ProfileStatus_profileStatusContainer__gIIhi",status:"ProfileStatus_status__1xyAI"}},296:function(e,t,a){e.exports={imgContainer:"ProfileImg_imgContainer__2oXUw"}},297:function(e,t,a){e.exports={postContainer:"Post_postContainer__1fDxu",postTop:"Post_postTop__2bjZo",postText:"Post_postText__3-SaE"}},298:function(e,t,a){e.exports={myPostsContainer:"MyPosts_myPostsContainer__27hVR",postsBlock:"MyPosts_postsBlock__1KdIR"}},299:function(e,t,a){e.exports={profileMain:"Profile_profileMain__2_m40"}},303:function(e,t,a){"use strict";a.r(t);var n=a(27),o=a(28),l=a(30),r=a(29),s=a(31),c=a(0),i=a.n(c),u=a(98),m=a(67),p=a(295),f=a.n(p),d=a(57),E=a.n(d),v=function(e){var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1],l=Object(c.useState)(e.status),r=Object(u.a)(l,2),s=r[0],m=r[1];Object(c.useEffect)(function(){m(e.status)},[e.status]);var p=function(){o(!1),e.updateStatus(s)};return e.isOwner?i.a.createElement("div",{className:f.a.profileStatusContainer},i.a.createElement("div",null,i.a.createElement("h2",null,e.nameUser)),!n&&i.a.createElement("div",{onClick:function(){o(!0)},className:f.a.status},e.status||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430, \u0441\u043e\u0440\u0438"),n&&i.a.createElement("div",null,i.a.createElement("input",{onBlur:p,onChange:function(e){m(e.currentTarget.value)},value:s,autoFocus:!0}),i.a.createElement("button",{className:E.a.buttonStyle,onClick:p},"Save"))):i.a.createElement("div",{className:f.a.profileStatusContainer},i.a.createElement("div",null,i.a.createElement("h2",null,e.nameUser)),i.a.createElement("div",{className:f.a.status},e.status||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430, \u0441\u043e\u0440\u0438"))},b=a(293),P=a.n(b),h=function(e){return i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,e.contactName,": "),i.a.createElement("div",null,e.contactValue))},g=a(130),_=a(39),O=a(68),N=a(71),k=a.n(N),S=Object(g.a)({form:"edit-profile"})(function(e){var t=e.handleSubmit,a=e.exitToEditPage,n=e.profile,o=e.error;return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:E.a.buttonStyle,onClick:a},"Exit"),i.a.createElement("form",{onSubmit:t},i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,i.a.createElement("b",null,"My name: ")),i.a.createElement("div",null,Object(_.c)("My name",_.a,"fullName",[O.b]))),i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: ")),i.a.createElement("div",null,Object(_.c)("",_.a,"lookingForAJob",null,{type:"checkbox"}))),i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,i.a.createElement("b",null,"Description:")),i.a.createElement("div",null,Object(_.c)("About me",_.b,"lookingForAJobDescription",[O.b]))),i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,i.a.createElement("b",null,"About me:")),i.a.createElement("div",null,Object(_.c)("About me",_.b,"aboutMe",[O.b]))),i.a.createElement("div",null,i.a.createElement("b",null,"My contacts: "),Object.keys(n.contacts).map(function(e){return i.a.createElement("div",{key:e,className:P.a.contact},i.a.createElement("div",null,i.a.createElement("i",null,e)),i.a.createElement("div",null,Object(_.c)(e,_.a,"contacts."+e)))})),o&&i.a.createElement("div",{className:k.a.formSummaryError},o),i.a.createElement("div",null,i.a.createElement("button",{className:E.a.buttonStyle},"Save"))))}),C=a(95),y=a.n(C),j=a(296),x=a.n(j),w=function(e){return i.a.createElement("div",{className:x.a.imgContainer},i.a.createElement("img",{src:e.profile.photos.large||y.a,alt:"",className:P.a.logo}),e.isOwner&&i.a.createElement("input",{type:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}))},I=function(e){return i.a.createElement("div",{className:P.a.contactsDataContainer},i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,i.a.createElement("b",null,"Looking for a job: ")),i.a.createElement("div",null,e.profile.lookingForAJob?"yes":"no")),i.a.createElement("div",{className:P.a.contact},i.a.createElement("div",null,i.a.createElement("b",null,"My skills: ")),i.a.createElement("div",null,e.profile.lookingForAJobDescription)),i.a.createElement("div",null,i.a.createElement("b",null,"My contacts: "),i.a.createElement("br",null),Object.keys(e.profile.contacts).map(function(t){return i.a.createElement(h,{key:t,contactName:t,contactValue:e.profile.contacts[t]})})),e.isOwner&&i.a.createElement("button",{onClick:e.goToEditPage,className:E.a.buttonStyle},"Edit"))},T=function(e){if(!e.profile)return i.a.createElement(m.a,null);var t=Object(c.useState)(!1),a=Object(u.a)(t,2),n=a[0],o=a[1];return i.a.createElement("div",{className:P.a.profileInfoContainer},i.a.createElement(w,e),i.a.createElement("div",{className:P.a.descriptionBlock},i.a.createElement(v,{status:e.status,updateStatus:e.updateStatus,nameUser:e.profile.fullName,isOwner:e.isOwner}),n?i.a.createElement(S,{onSubmit:function(t){console.log(t),e.saveProfileData(t).then(function(){o(!1)})},initialValues:e.profile,profile:e.profile,exitToEditPage:function(){o(!1)}}):i.a.createElement(I,{isOwner:e.isOwner,profile:e.profile,goToEditPage:function(){o(!0)}})))},D=a(97),M=a(9),U=a(297),A=a.n(U),F=function(e){return i.a.createElement("div",{className:A.a.postContainer},i.a.createElement("div",{className:A.a.postTop},i.a.createElement("div",null,i.a.createElement("img",{src:e.photo,alt:""})),i.a.createElement("div",null,e.name)),i.a.createElement("div",{className:A.a.postText},e.message))},B=a(89),J=a(298),V=a.n(J),z=a(294),L=a.n(z),R=function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit,className:L.a.addTextForm},i.a.createElement("div",null,i.a.createElement(B.a,{placeholder:"Post message",component:_.b,name:"newPost",validate:[]})),i.a.createElement("div",null,i.a.createElement("button",{className:E.a.buttonStyle,onClick:e.onClick},"Add post")))};R=Object(g.a)({form:"addNewPost"})(R);var K=i.a.memo(function(e){if(!e.profilePage.profile)return i.a.createElement(i.a.Fragment,null);var t=e.profilePage.posts.slice(0).reverse().map(function(t){return i.a.createElement(F,{key:t.id,message:t.message,likeCounts:t.likeCounts,name:e.profilePage.profile.fullName,photo:e.profilePage.profile.photos.small})});return i.a.createElement("div",{className:V.a.myPostsContainer},i.a.createElement("div",{className:V.a.postsBlock},i.a.createElement(R,{onSubmit:function(t){t=Object(M.a)({},t,{id:e.profilePage.posts.length+1}),console.log(t),e.addPostCollback(t),e.resetText("addNewPost")}}),i.a.createElement("div",{className:V.a.posts},t)))}),W=a(13),X=a(36),Z=Object(W.b)(function(e){return{profilePage:e.profilePage}},function(e){return{addPostCollback:function(t){e(D.a.addPost(t))},resetText:function(t){return e(Object(X.a)(t))}}})(K),q=a(299),G=a.n(q),H=function(e){return i.a.createElement("div",{className:G.a.profileMain},i.a.createElement(T,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfileData:e.saveProfileData}),i.a.createElement(Z,{isOwner:e.isOwner}))},Q=a(24),Y=a(96),$=a(8),ee=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"updateUserParams",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfileInfo(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.updateUserParams()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.updateUserParams()}},{key:"render",value:function(){return i.a.createElement(H,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateUserStatus,savePhoto:this.props.savePhoto,saveProfileData:this.props.saveProfileData}))}}]),t}(i.a.Component),te={getProfileInfo:D.c,getUserStatus:D.d,updateUserStatus:D.g,savePhoto:D.e,saveProfileData:D.f};t.default=Object($.d)(Object(W.b)(function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorizedUserId:e.auth.id}},te),Q.g,Y.a)(ee)}}]);
//# sourceMappingURL=3.a027098c.chunk.js.map