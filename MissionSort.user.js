// ==UserScript==
// @name         Einsatzsortierung
// @version      0.9.1
// @author       FeuerwehrHannover
// @include      *://www.leitstellenspiel.de/
// @include      *://www.leitstellenspiel.de/missions/*
// ==/UserScript==

$(document).ready(function(){if("/"==window.location.pathname){var e={},t={},i={},s={},r={},d={0:{Credits:110},1:{Credits:170},2:{Credits:370},3:{Credits:340},4:{Credits:200},5:{Credits:1400},6:{Credits:600},7:{Credits:210},8:{Credits:220},9:{Credits:250},10:{Credits:600},11:{Credits:240},12:{Credits:310},13:{Credits:980},14:{Credits:1e3},15:{Credits:1010},16:{Credits:1100},17:{Credits:340},18:{Credits:700},19:{Credits:650},20:{Credits:2500},21:{Credits:2400},22:{Credits:2700},23:{Credits:1200},24:{Credits:900},25:{Credits:1e3},26:{Credits:3510},27:{Credits:700},28:{Credits:1400},29:{Credits:2470},30:{Credits:1900},31:{Credits:400},32:{Credits:1310},33:{Credits:1200},34:{Credits:3710},35:{Credits:3810},36:{Credits:3310},37:{Credits:110},38:{Credits:110},39:{Credits:110},40:{Credits:110},41:{Credits:10010},42:{Credits:3720},43:{Credits:10010},44:{Credits:0},45:{Credits:0},46:{Credits:0},47:{Credits:0},48:{Credits:0},49:{Credits:0},50:{Credits:0},51:{Credits:3620},52:{Credits:310},53:{Credits:1410},54:{Credits:0},55:{Credits:870},56:{Credits:0},57:{Credits:0},58:{Credits:0},59:{Credits:14010},60:{Credits:100},61:{Credits:100},62:{Credits:120},63:{Credits:120},64:{Credits:150},65:{Credits:150},66:{Credits:150},67:{Credits:120},68:{Credits:120},69:{Credits:120},70:{Credits:120},71:{Credits:120},72:{Credits:2e3},73:{Credits:700},74:{Credits:500},75:{Credits:10020},76:{Credits:800},77:{Credits:500},78:{Credits:130},79:{Credits:1800},80:{Credits:2e3},81:{Credits:400},82:{Credits:400},83:{Credits:2500},84:{Credits:0},85:{Credits:200},86:{Credits:3e3},87:{Credits:0},88:{Credits:500},89:{Credits:2500},90:{Credits:250},91:{Credits:370},92:{Credits:0},93:{Credits:3e3},94:{Credits:400},95:{Credits:4e3},96:{Credits:2900},97:{Credits:2500},98:{Credits:300},99:{Credits:0},100:{Credits:900},101:{Credits:1500},102:{Credits:2e3},103:{Credits:2200},104:{Credits:2e3},105:{Credits:2200},106:{Credits:1800},107:{Credits:1800},108:{Credits:0},109:{Credits:0},110:{Credits:0},111:{Credits:350},112:{Credits:850},113:{Credits:1500},114:{Credits:900},115:{Credits:0},116:{Credits:1600},117:{Credits:100},118:{Credits:550},119:{Credits:100},120:{Credits:2200},121:{Credits:2500},122:{Credits:600},123:{Credits:1100},124:{Credits:1600},125:{Credits:1700},126:{Credits:2e3},127:{Credits:2200},128:{Credits:700},129:{Credits:800},130:{Credits:600},131:{Credits:2e3},132:{Credits:5e3},133:{Credits:5100},134:{Credits:4e3},135:{Credits:4100},136:{Credits:8e3},137:{Credits:8100},138:{Credits:1500},139:{Credits:3500},140:{Credits:1600},141:{Credits:3600},142:{Credits:1500},143:{Credits:400},144:{Credits:400},145:{Credits:150},146:{Credits:4200},147:{Credits:0},148:{Credits:100},149:{Credits:100},150:{Credits:150},151:{Credits:1200},152:{Credits:750},153:{Credits:100},154:{Credits:100},155:{Credits:0},156:{Credits:0},157:{Credits:0},158:{Credits:370},159:{Credits:120},160:{Credits:150},161:{Credits:900},162:{Credits:1400},163:{Credits:1400},164:{Credits:0},165:{Credits:0},166:{Credits:1200},167:{Credits:1400},168:{Credits:600},169:{Credits:600},170:{Credits:600},171:{Credits:4e3},172:{Credits:600},173:{Credits:700},174:{Credits:1020},175:{Credits:900},176:{Credits:2100},177:{Credits:4600},178:{Credits:2900},179:{Credits:0},180:{Credits:0},181:{Credits:0},182:{Credits:0},183:{Credits:0},184:{Credits:0},185:{Credits:0},186:{Credits:5630},187:{Credits:2230},188:{Credits:100},189:{Credits:80},190:{Credits:150},191:{Credits:310},192:{Credits:1900},193:{Credits:2e3},194:{Credits:1e3},195:{Credits:1e3},196:{Credits:1e3},197:{Credits:2e3},198:{Credits:2500},199:{Credits:750},200:{Credits:5500},201:{Credits:9e3},202:{Credits:300},203:{Credits:610},204:{Credits:3e3},205:{Credits:5100},206:{Credits:10200},207:{Credits:16010},208:{Credits:4e3},209:{Credits:150},210:{Credits:0},211:{Credits:0},212:{Credits:0},213:{Credits:11200},214:{Credits:3e3},215:{Credits:4e3},216:{Credits:500},217:{Credits:500},218:{Credits:500},219:{Credits:500},220:{Credits:500},221:{Credits:17e3},222:{Credits:14e3},223:{Credits:4400},224:{Credits:4e3},225:{Credits:7e3},226:{Credits:5e3},227:{Credits:5e3},228:{Credits:2e3},229:{Credits:4e3},230:{Credits:1e3},231:{Credits:4e3},232:{Credits:3500},233:{Credits:4500},234:{Credits:4e3},235:{Credits:1500},236:{Credits:2e3},237:{Credits:1700},238:{Credits:2e3},239:{Credits:3e3},240:{Credits:2500},241:{Credits:200},242:{Credits:2100},243:{Credits:1200},244:{Credits:1e3},245:{Credits:1200},246:{Credits:1400},247:{Credits:1400},248:{Credits:2e3},249:{Credits:3e3},250:{Credits:1e3},251:{Credits:1200},252:{Credits:1400},253:{Credits:1400},254:{Credits:2e3},255:{Credits:3e3},256:{Credits:10010},257:{Credits:2500},258:{Credits:2800},259:{Credits:370},260:{Credits:220},261:{Credits:1e3},262:{Credits:2500},263:{Credits:900},264:{Credits:1500},265:{Credits:400},266:{Credits:400},267:{Credits:150},268:{Credits:4200},269:{Credits:200},270:{Credits:200},271:{Credits:6050},272:{Credits:1600},273:{Credits:1600},274:{Credits:0},275:{Credits:7e3},276:{Credits:2e3},277:{Credits:350},278:{Credits:2500},279:{Credits:2800},280:{Credits:1500},281:{Credits:0},282:{Credits:1e3},283:{Credits:4e3},284:{Credits:100},285:{Credits:150},286:{Credits:1020},287:{Credits:300},288:{Credits:110},289:{Credits:400},290:{Credits:800},291:{Credits:7e3},292:{Credits:300},293:{Credits:0},294:{Credits:12e3},295:{Credits:1100},296:{Credits:2020},297:{Credits:0},298:{Credits:1500},299:{Credits:2500},300:{Credits:1500},301:{Credits:500},302:{Credits:6e3},303:{Credits:700},304:{Credits:6500},305:{Credits:13e3},306:{Credits:8e3},307:{Credits:6e3},308:{Credits:1e3},309:{Credits:1e3},310:{Credits:1e3},311:{Credits:1100},312:{Credits:0},313:{Credits:900},314:{Credits:1900},315:{Credits:4400},316:{Credits:5400},317:{Credits:1500},318:{Credits:200},319:{Credits:1e3},320:{Credits:11500},321:{Credits:1800},322:{Credits:2500},323:{Credits:1500},324:{Credits:1e4},325:{Credits:7e3},326:{Credits:0},327:{Credits:3500},328:{Credits:1200},329:{Credits:700},330:{Credits:2e3},331:{Credits:3e3},332:{Credits:1e4},333:{Credits:1e4},334:{Credits:6e3},335:{Credits:6e3},336:{Credits:500},337:{Credits:370},338:{Credits:340},339:{Credits:0},340:{Credits:0},341:{Credits:0},342:{Credits:2500},343:{Credits:2500},344:{Credits:1010},345:{Credits:1200},346:{Credits:6500},347:{Credits:6e3},348:{Credits:1e4},349:{Credits:100},350:{Credits:17e3},351:{Credits:4e3},352:{Credits:7500},353:{Credits:4500},354:{Credits:0},355:{Credits:0},356:{Credits:1700},357:{Credits:500},358:{Credits:4e3},359:{Credits:9e3},360:{Credits:500},361:{Credits:500},362:{Credits:500},363:{Credits:500},364:{Credits:500},365:{Credits:500},366:{Credits:550},367:{Credits:2800},368:{Credits:7500},369:{Credits:1800},370:{Credits:1e3},371:{Credits:300},372:{Credits:300},373:{Credits:0},374:{Credits:0},375:{Credits:300},376:{Credits:600},377:{Credits:0},378:{Credits:4400},379:{Credits:900},380:{Credits:900},381:{Credits:900},382:{Credits:900},383:{Credits:600},384:{Credits:1100},385:{Credits:5100},386:{Credits:5500},387:{Credits:6500},388:{Credits:2500},389:{Credits:8500},390:{Credits:1e3},391:{Credits:0},392:{Credits:1900},393:{Credits:3e3},394:{Credits:3e3},395:{Credits:3e3},396:{Credits:3e3},397:{Credits:0},398:{Credits:3200},399:{Credits:2700},400:{Credits:5050},401:{Credits:1600},402:{Credits:400},403:{Credits:110},404:{Credits:110},405:{Credits:980},406:{Credits:980},407:{Credits:3700},408:{Credits:400},409:{Credits:980},410:{Credits:110},411:{Credits:5900},412:{Credits:3e3},413:{Credits:2500},414:{Credits:3e3},415:{Credits:200},416:{Credits:0},417:{Credits:0},418:{Credits:400},419:{Credits:4500},420:{Credits:0},421:{Credits:800},422:{Credits:400},423:{Credits:3100},424:{Credits:8600},425:{Credits:0},426:{Credits:0},427:{Credits:0},428:{Credits:0},429:{Credits:3100},430:{Credits:7e3},431:{Credits:0},432:{Credits:1700},433:{Credits:6e3},434:{Credits:5800},435:{Credits:6e3},436:{Credits:400},437:{Credits:400},438:{Credits:2e3},439:{Credits:8e3},440:{Credits:0},441:{Credits:1600},441:{Credits:1600},442:{Credits:1e3},443:{Credits:2200},444:{Credits:1e3},445:{Credits:400},446:{Credits:2e3},447:{Credits:3e3},448:{Credits:100},449:{Credits:2100},450:{Credits:2200},451:{Credits:2e3},452:{Credits:500},453:{Credits:500},454:{Credits:500},455:{Credits:500},456:{Credits:500},457:{Credits:500},458:{Credits:4e3},459:{Credits:2e3},460:{Credits:1e3},461:{Credits:0},462:{Credits:12e3},463:{Credits:1260},464:{Credits:1500},465:{Credits:10112}};$("body").hasClass("dark")?localStorage.setItem("sort-dark",!0):localStorage.removeItem("sort-dark"),$("#btn-group-mission-select").append('<button id="sortdebug" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button> <button id="sortdate" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon-time" aria-hidden="true"></span></button> <button id="sortcredits" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span></button> <button id="sortabc" class="btn btn-xs btn-default mission_selection"><span class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span></button>'),localStorage.removeItem("sort-credits"),localStorage.removeItem("sort-date"),localStorage.removeItem("sort-credits-alliance"),localStorage.removeItem("sort-abc"),localStorage.removeItem("sort-abc-alliance"),$("#mission_list .missionSideBarEntry").each(function(){$(this).attr("sort-default",$(this).index())}),$("#mission_list_alliance .missionSideBarEntry").each(function(){$(this).attr("sort-default",$(this).index())}),$("#sortcredits").click(function(){localStorage.removeItem("sort-credits"),localStorage.removeItem("sort-date"),localStorage.removeItem("sort-credits-alliance"),localStorage.setItem("sort-mode","credits"),$("#mission_list .missionSideBarEntry").each(function(){var t=$(this).attr("mission_type_id");if(null==d[t])console.log("Neuer Einsatz ID: "+t);else{var i=$(this).index(),s=$(this).attr("mission_id");$(this).attr("data-credits",d[t].Credits),e[i]=s,localStorage.setItem("sort-credits",JSON.stringify(e))}}),$("#mission_list_alliance .missionSideBarEntry").each(function(){var e=$(this).attr("mission_type_id");if("null"==e){var i=$(this).index(),s=$(this).attr("mission_id");$(this).attr("data-credits","25000"),t[i]=s,localStorage.setItem("sort-credits-alliance",JSON.stringify(t))}else if(null==d[e])console.log("Neuer Einsatz ID: "+e);else{i=$(this).index(),s=$(this).attr("mission_id");$(this).attr("data-credits",d[e].Credits),t[i]=s,localStorage.setItem("sort-credits-alliance",JSON.stringify(t))}});var i=$("#mission_list div.missionSideBarEntry"),s=$("#mission_list_alliance div.missionSideBarEntry");i.sort(function(e,t){return+$(t).attr("data-credits")-+$(e).attr("data-credits")}),i.appendTo("div#mission_list"),s.sort(function(e,t){return+$(t).attr("data-credits")-+$(e).attr("data-credits")}),s.appendTo("div#mission_list_alliance")}),$("#sortdate").click(function(){localStorage.setItem("sort-mode","date"),localStorage.removeItem("sort-credits"),localStorage.removeItem("sort-date"),localStorage.removeItem("sort-credits-alliance"),localStorage.removeItem("sort-abs");var e=$("#mission_list_alliance .missionSideBarEntry");e.sort(function(e,t){return+$(e).attr("mission_id")-+$(t).attr("mission_id")}),e.appendTo("#mission_list_alliance"),$("#mission_list_alliance .missionSideBarEntry").each(function(){var e=$(this).index(),t=$(this).attr("mission_id");i[e]=t}),localStorage.setItem("sort-date",JSON.stringify(i))}),$("#sortdebug").click(function(){localStorage.removeItem("sort-date"),localStorage.removeItem("sort-credits"),localStorage.removeItem("sort-mode"),localStorage.removeItem("sort-abc");var e=$("#mission_list div.missionSideBarEntry"),t=$("#mission_list_alliance div.missionSideBarEntry");e.sort(function(e,t){return+$(e).attr("sort-default")-+$(t).attr("sort-default")}),e.appendTo("div#mission_list"),t.sort(function(e,t){return+$(e).attr("sort-default")-+$(t).attr("sort-default")}),t.appendTo("div#mission_list_alliance")}),$("#sortabc").click(function(){localStorage.setItem("sort-mode","abc"),localStorage.removeItem("sort-date"),localStorage.removeItem("sort-credits");var e=$("#mission_list div.missionSideBarEntry"),t=$("#mission_list_alliance div.missionSideBarEntry");e.sort(function(e,t){return $(e).find("a.map_position_mover").clone().children().remove().end().text()<$(t).find("a.map_position_mover").clone().children().remove().end().text()?-1:$(e).find("a.map_position_mover").clone().children().remove().end().text()>$(t).find("a.map_position_mover").clone().children().remove().end().text()?1:0}),e.appendTo("div#mission_list"),t.sort(function(e,t){return $(e).find("a.map_position_mover").clone().children().remove().end().text()<$(t).find("a.map_position_mover").clone().children().remove().end().text()?-1:$(e).find("a.map_position_mover").clone().children().remove().end().text()>$(t).find("a.map_position_mover").clone().children().remove().end().text()?1:0}),t.appendTo("div#mission_list_alliance"),$("#mission_list .missionSideBarEntry").each(function(){var e=$(this).index(),t=$(this).attr("mission_id");s[e]=t}),localStorage.setItem("sort-abc",JSON.stringify(s)),$("#mission_list_alliance .missionSideBarEntry").each(function(){var e=$(this).index(),t=$(this).attr("mission_id");r[e]=t}),localStorage.setItem("sort-abc-alliance",JSON.stringify(r))}),faye.subscribe("/private-alliance140de",function(e){e.search("missionMarkerAdd()")})}if(window.location.pathname.indexOf("missions/")>-1){function n(e,t){return parseInt(Object.keys(e).find(i=>e[i]===t))}function o(e){$(".mission_header_info div:eq(0)").append('<div class="sorterror"><p style="margin: 0;"><strong>Fehler!</strong>'+e+"</p></div>"),$(".sorterror").css({"background-color":"#ffdddd","border-left":"6px solid #f44336","margin-bottom":"15px",padding:"4px 12px",display:"flex","align-items":"center"}),"true"==localStorage.getItem("sort-dark")&&$(".sorterror").css("color","#000")}function a(){return $("#mission_finish_now_btn").length?"sort-credits":"sort-credits-alliance"}function C(){return $("#mission_finish_now_btn").length?"sort-abc":"sort-abc-alliance"}function l(e){null!=e?$(".navbar-header").append('<div class="btn-group"><button id="sort-alert-next" next="'+e+'" class="btn btn-warning btn-sm" title="Alarmieren und weiter (sortiert)"><img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="10" height="18"><span class="glyphicon glyphicon-arrow-right"></span></button></div>'):$(".navbar-header").append('<div class="btn-group"><button class="btn btn-warning disabled" title="Alarmieren und weiter (sortiert)"><img class="icon icons8-Phone-Filled" src="/images/icons8-phone_filled.svg" width="10" height="18"><span class="glyphicon glyphicon-arrow-right"></span></button></div>')}if(null!=localStorage.getItem("sort-next")&&""!=localStorage.getItem("sort-next")){var c=localStorage.getItem("sort-next");localStorage.removeItem("sort-next"),window.location.href="https://www.leitstellenspiel.de/missions/"+c}if($(document).on("click","#sort-alert-next",function(){localStorage.setItem("sort-next",$("#sort-alert-next").attr("next")),$("#mission_alarm_btn").click()}),null==localStorage.getItem("sort-mode"))throw o(" Es konnte keine Sortierung gefunden werden | ID: #4 (no sort-mode)"),new Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #4");if("credits"==localStorage.getItem("sort-mode")){if(null==localStorage.getItem(a()))throw o(" Es konnte keine Sortierung gefunden werden | ID: #1 (no storage item)"),new Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #1");var m=location.href.replace("https://www.leitstellenspiel.de/missions/","");if(null!==n(b=JSON.parse(localStorage.getItem(a())),m)){var g='<div class="btn-group"><a href="/missions/',p=n(b,m),h=parseInt(b[p-1]);isNaN(h)?g+='" class="disabled ':g+=h+'" class="',g+='btn btn-fadeout btn-sm btn-warning navbar-btn" id="sort_previous" title="Vorheriger sortierter Einsatz"> <span class="glyphicon glyphicon-arrow-left"></span> <span class="glyphicon glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span></a><a href="/missions/';var u=parseInt(b[p+1]);isNaN(u)?g+='" class="disabled ':g+=u+'" class="',g+='btn  btn-fadeout btn-sm  btn-warning navbar-btn" id="sort_next" title="Nächster sortierter Einsatz"><span class="glyphicon glyphicon glyphicon glyphicon-euro" aria-hidden="true"></span> <span class="glyphicon glyphicon-arrow-right"></span> </a></div>',l(u),$(".navbar-header").append(g)}else o(" Zu diesem Einsatz konnte keine Sortierung gefunden werden. Sortiere die Einsätze erneut.")}else if("abc"==localStorage.getItem("sort-mode")){if(null==localStorage.getItem(C()))throw o(" Es konnte keine Sortierung gefunden werden | ID: #2 (no storage item)"),new Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #2");m=location.href.replace("https://www.leitstellenspiel.de/missions/","");var b=JSON.parse(localStorage.getItem(C()));if(isNaN(n(b,m)))o(" Zu diesem Einsatz konnte keine Sortierung gefunden werden. Sortiere die Einsätze erneut.");else{g='<div class="btn-group"><a href="/missions/',p=n(b,m),h=parseInt(b[p-1]);isNaN(h)?g+='" class="disabled ':g+=h+'" class="',g+='btn btn-fadeout btn-sm btn-warning navbar-btn" id="sort_previous" title="Vorheriger sortierter Einsatz"> <span class="glyphicon glyphicon-arrow-left"></span> <span class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span></a><a href="/missions/';u=parseInt(b[p+1]);isNaN(u)?g+='" class="disabled ':g+=u+'" class="',g+='btn  btn-fadeout btn-sm  btn-warning navbar-btn" id="sort_next" title="Nächster sortierter Einsatz"><span class="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span> <span class="glyphicon glyphicon-arrow-right"></span> </a></div>',l(u),$(".navbar-header").append(g)}}else{if("date"!=localStorage.getItem("sort-mode"))throw o(" Es konnte keine Sortierung gefunden werden | ID: #1 (sort-mode undefined)"),new Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #3");if(null==localStorage.getItem("sort-date"))throw o(" Es konnte keine Sortierung gefunden werden | ID: #2 (no storage item)"),new Error("Einsatzsortierung | Ein Fehler ist aufgetreten! Bei Problemen melde dich im Forum. ID: #2");m=location.href.replace("https://www.leitstellenspiel.de/missions/",""),b=JSON.parse(localStorage.getItem("sort-date"));if(isNaN(n(b,m)))o(" Zu diesem Einsatz konnte keine Sortierung gefunden werden. Sortiere die Einsätze erneut.");else{g='<div class="btn-group"><a href="/missions/',p=n(b,m),h=parseInt(b[p-1]);isNaN(h)?g+='" class="disabled ':g+=h+'" class="',g+='btn btn-fadeout btn-sm btn-warning navbar-btn" id="sort_previous" title="Vorheriger sortierter Einsatz"> <span class="glyphicon glyphicon-arrow-left"></span> <span class="glyphicon glyphicon-time" aria-hidden="true"></span></a><a href="/missions/';u=parseInt(b[p+1]);isNaN(u)?g+='" class="disabled ':g+=u+'" class="',g+='btn  btn-fadeout btn-sm  btn-warning navbar-btn" id="sort_next" title="Nächster sortierter Einsatz"><span class="glyphicon glyphicon-time" aria-hidden="true"></span> <span class="glyphicon glyphicon-arrow-right"></span> </a></div>',l(u),$(".navbar-header").append(g)}}}})
