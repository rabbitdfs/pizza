"use strict";(self.webpackChunkpizza=self.webpackChunkpizza||[]).push([[171],{8171:(b,d,o)=>{o.r(d),o.d(d,{HomeModule:()=>_});var l=o(6814),c=o(266),m=o(8645),g=o(7398),t=o(5879),s=o(6273);const x=["popup"];function C(e,O){if(1&e&&(t.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"h5",5),t._uU(5,"Modal title"),t.qZA(),t._UZ(6,"button",6),t.qZA(),t.TgZ(7,"div",7)(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"div",8)(11,"button",9),t._uU(12,"Close"),t.qZA(),t.TgZ(13,"button",10),t._uU(14,"Save changes"),t.qZA()()()()()),2&e){const u=t.oxw();t.xp6(9),t.Oqu(u.data)}}let r=(()=>{class e{constructor(u){this.modalService=u,this.data=""}open(){this.modalService.open(this.popup)}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(s.FF))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-popup"]],viewQuery:function(n,i){if(1&n&&t.Gf(x,5),2&n){let a;t.iGM(a=t.CRH())&&(i.popup=a.first)}},inputs:{data:"data"},decls:2,vars:0,consts:[["popup",""],["tabindex","-1","id","myModal",1,""],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary"]],template:function(n,i){1&n&&t.YNc(0,C,15,1,"ng-template",null,0,t.W1O)},encapsulation:2})}return e})();var f=o(7422);const v=[{path:"",component:(()=>{class e{constructor(u){this.cartService=u,this.subscription=null,this.subject=new m.x;let n=0;setInterval(()=>{this.subject.next(n++)},1e3),setTimeout(()=>{this.subject.error("world")},5e3)}ngOnInit(){this.subscription=this.subject.subscribe({next:u=>{console.log("subscriber 1: ",u)},error:u=>{console.log("ERROR!!! :",u)}})}ngAfterViewInit(){this.popupComponent.open()}ngOnDestroy(){this.subscription?.unsubscribe()}test(){this.subject.pipe((0,g.U)(u=>"\u0427\u0438\u0441\u043b\u043e: "+u)).subscribe(u=>{console.log("subscriber 2: ",u)})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(f.N))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-main"]],viewQuery:function(n,i){if(1&n&&t.Gf(r,5),2&n){let a;t.iGM(a=t.CRH())&&(i.popupComponent=a.first)}},decls:46,vars:1,consts:[[1,"main"],[1,"container"],[1,"main-info","wow","animate__bounceInUp"],[1,"double-title"],[1,"main-advantages"],[1,"advantage"],[1,"advantage-image"],["src","../../../../assets/images/advantage1.png","alt","Advantage"],[1,"advantage-text"],[1,"advantage-title"],[1,"advantage-description"],["src","../../../../assets/images/advantage2.png","alt","Advantage"],["src","../../../../assets/images/advantage3.png","alt","Advantage"],["src","../../../../assets/images/advantage4.png","alt","Advantage"],[1,"main-action"],["id","choose-pizza",1,"button","open-popup-link",3,"click"],[1,"main-image","wow","bounceInUp"],["src","../../../../assets/images/pizza_big.png","alt","Big Pizza"],[3,"data"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"\u0421\u0430\u043c\u0430\u044f \u044b\u0432\u0432\u0432 \u043f\u0438\u0446\u0446\u0430 \u0432 \u043c\u0438\u0440e "),t.TgZ(5,"span"),t._uU(6,"\u0442\u043e\u043b\u044c\u043a\u043e \u0432 Pizza Cheff"),t.qZA()(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6),t._UZ(10,"img",7),t.qZA(),t.TgZ(11,"div",8)(12,"div",9),t._uU(13,"\u041b\u0443\u0447\u0448\u0435\u0435 \u0442\u0435\u0441\u0442\u043e"),t.qZA(),t.TgZ(14,"div",10),t._uU(15,"\u041c\u044b \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0442\u0435\u0441\u0442\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u043e\u0442\u0431\u043e\u0440\u043d\u043e\u0439 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u043e\u0439 \u043c\u0443\u043a\u0438 \u043d\u0430\u0438\u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430 "),t.qZA()()(),t.TgZ(16,"div",5)(17,"div",6),t._UZ(18,"img",11),t.qZA(),t.TgZ(19,"div",8)(20,"div",9),t._uU(21,"\u043b\u0443\u0447\u0448\u0438\u0435 \u043f\u043e\u0432\u0430\u0440\u0430"),t.qZA(),t.TgZ(22,"div",10),t._uU(23,"\u041f\u0438\u0446\u0446\u044b \u0433\u043e\u0442\u043e\u0432\u044f\u0442 \u0441\u0430\u043c\u044b\u0435 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0438\u0435 \u043f\u043e\u0432\u0430\u0440\u0430 "),t.qZA()()(),t.TgZ(24,"div",5)(25,"div",6),t._UZ(26,"img",12),t.qZA(),t.TgZ(27,"div",8)(28,"div",9),t._uU(29,"\u0433\u0430\u0440\u0430\u043d\u0442\u0438\u044f \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430"),t.qZA(),t.TgZ(30,"div",10),t._uU(31,"\u041d\u0430\u0448\u0430 \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043d\u0430\u0433\u0440\u0430\u0434 \u0438 \u043f\u0440\u0438\u0437\u043d\u0430\u043d\u0438\u0439 \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443 "),t.qZA()()(),t.TgZ(32,"div",5)(33,"div",6),t._UZ(34,"img",13),t.qZA(),t.TgZ(35,"div",8)(36,"div",9),t._uU(37,"\u043e\u0442\u0431\u043e\u0440\u043d\u044b\u0435 \u0440\u0435\u0446\u0435\u043f\u0442\u044b"),t.qZA(),t.TgZ(38,"div",10),t._uU(39,"\u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0440\u0435\u0446\u0435\u043f\u0442\u044b \u043e\u0442 \u043c\u0438\u0440\u043e\u0432\u044b\u0445 \u043b\u0438\u0434\u0435\u0440\u043e\u0432 \u0432 \u0438\u0437\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u043f\u0438\u0446\u0446\u044b "),t.qZA()()()(),t.TgZ(40,"div",14)(41,"a",15),t.NdJ("click",function(){return i.test()}),t._uU(42,"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443"),t.qZA()()(),t.TgZ(43,"div",16),t._UZ(44,"img",17),t.qZA()()(),t._UZ(45,"app-popup",18)),2&n&&(t.xp6(45),t.Q6J("data","main component"))},dependencies:[r],styles:[".main[_ngcontent-%COMP%]{padding:132px 0 81px}.main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.main-info[_ngcontent-%COMP%]{max-width:622px}.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:45px;font-family:MullerExtraBold,sans-serif;margin-bottom:13px}.double-title[_ngcontent-%COMP%]{color:#b99150}.double-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ffaf18}.main-advantages[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.advantage[_ngcontent-%COMP%]{max-width:306px;display:flex;justify-content:space-between;align-items:flex-start;margin-top:47px}.advantage[_ngcontent-%COMP%]   .advantage-text[_ngcontent-%COMP%]{margin-left:16px;max-width:288px}.advantage[_ngcontent-%COMP%]   .advantage-title[_ngcontent-%COMP%]{font-size:16px;font-family:MullerExtraBold,sans-serif;color:#ffaf18;text-transform:uppercase;margin-bottom:10px}.main-advantages[_ngcontent-%COMP%]   .advantage[_ngcontent-%COMP%]   .advantage-description[_ngcontent-%COMP%]{font-size:16px;color:#b99150;max-width:228px}.main-action[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{margin-top:60px;display:flex;justify-content:center;text-decoration:none}.products[_ngcontent-%COMP%]{padding:80px 0 120px}.products-title[_ngcontent-%COMP%]{font-size:35px;font-family:MullerBold,sans-serif;color:#bd985c;text-align:center}.products-items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;margin-top:35px}.order[_ngcontent-%COMP%]{padding:120px 0 115px;overflow:hidden}.order[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.order-text[_ngcontent-%COMP%]{max-width:384px}.order-text-title[_ngcontent-%COMP%]{font-size:35px;font-family:MullerExtraBold,sans-serif;font-weight:700;margin-bottom:65px}.order-text-message[_ngcontent-%COMP%]{font-size:16px;color:#b99150;line-height:1.5}.order-form[_ngcontent-%COMP%]{margin-left:122px;max-width:330px}.order-input[_ngcontent-%COMP%]{border-width:1px;border-color:#b99150;border-style:solid;background-color:#fff;width:330px;box-sizing:border-box;font-size:18px;color:#775e31;padding:23px 22px 24px;outline:0;margin-bottom:24px;height:60px}.order-input[_ngcontent-%COMP%]::placeholder{color:#cba86e}.order[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{background-color:#ffaf18;width:330px;height:60px}.order-image[_ngcontent-%COMP%]{width:282px;position:relative;margin-left:78px}.order-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;bottom:-37px;left:0}.white-popup[_ngcontent-%COMP%]{position:relative;background:#FFF;padding:20px;width:auto;max-width:500px;margin:20px auto}@media screen and (max-width: 1229px){.main-image[_ngcontent-%COMP%]{width:400px}.main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.products-items[_ngcontent-%COMP%]{justify-content:center}.order-form[_ngcontent-%COMP%]{margin-left:45px}.order[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{max-width:1024px}}@media screen and (max-width: 1023px){.main[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column}.main-image[_ngcontent-%COMP%]{order:1}.main-info[_ngcontent-%COMP%]{order:2}.main[_ngcontent-%COMP%]{padding-top:70px}.main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.main-action[_ngcontent-%COMP%]{text-align:center}.products[_ngcontent-%COMP%]{padding-top:0;padding-bottom:40px}.order[_ngcontent-%COMP%]{padding-top:60px;position:relative;overflow:hidden}.order[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{justify-content:center}.order-image[_ngcontent-%COMP%]{position:absolute;z-index:-1;right:calc(50% - 400px)}.order-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative}}@media screen and (max-width: 767px){.cart[_ngcontent-%COMP%]{margin-left:20px}.main-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{line-height:45px}.main-advantages[_ngcontent-%COMP%]{max-width:306px;margin-left:auto;margin-right:auto}.order[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.order-text-title[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}.order-text-message[_ngcontent-%COMP%]{text-align:center;margin-bottom:25px}.order-form[_ngcontent-%COMP%]{margin-left:0}}@media screen and (max-width: 424px){.main-image[_ngcontent-%COMP%]{width:100%}}@media screen and (max-width: 374px){.main-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:38px}.order-form[_ngcontent-%COMP%]{text-align:center}.order-input[_ngcontent-%COMP%], .order-form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{width:290px}}"]})}return e})()},{path:"about",component:(()=>{class e{constructor(u){this.modalService=u}ngAfterViewInit(){this.popupComponent.open()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(s.FF))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-about"]],viewQuery:function(n,i){if(1&n&&t.Gf(r,5),2&n){let a;t.iGM(a=t.CRH())&&(i.popupComponent=a.first)}},decls:13,vars:1,consts:[["about","",1,"order","wow","bounceInUp"],[1,"container"],[1,"order-text"],[1,"order-text-title","double-title"],[1,"order-text-message"],[1,"about-image"],["src","../../../../assets/images/pizza_big.png","alt","Pizza"],[3,"data"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span"),t._uU(5,"\u041b\u0443\u0447\u0448\u0430\u044f"),t.qZA(),t._uU(6," \u0438\u0442\u0430\u043b\u044c\u044f\u043d\u0441\u043a\u0430\u044f \u043f\u0438\u0446\u0446\u0435\u0440\u0438\u044f! "),t.qZA(),t.TgZ(7,"div",4),t._uU(8," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),t.qZA()(),t.TgZ(9,"div",5),t._UZ(10,"img",6)(11,"img",6),t.qZA()()(),t._UZ(12,"app-popup",7)),2&n&&(t.xp6(12),t.Q6J("data","main component"))},dependencies:[r],styles:[".about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{flex-direction:column;align-items:start}.about-image[_ngcontent-%COMP%]{margin-top:50px}"]})}return e})()}];let p=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]})}return e})();var M=o(6208);let _=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#n=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[l.ez,M.m,c.Bz,p,s.bz,p]})}return e})()}}]);