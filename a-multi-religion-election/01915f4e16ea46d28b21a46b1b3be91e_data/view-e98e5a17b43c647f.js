(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98434],{907335:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stories/view",function(){return r(32712)}])},597209:function(e,t,r){"use strict";var i=r(552322),n=r(202784),o=r(657070),a=r(67372),s=r(956516),d=r(166078),u=r(698526),l=r(362887),c=r(805876),f=r(478089),p=r(729320),w=r(770049);let m=(0,n.memo)(e=>{let{itemType:t,query:r,config:n,signInUrl:m,locale:v}=e;(0,w.IF)(v);let{isReady:P,storyItem:h,initialThemeItemInfo:y}=(0,w.$q)(t,e),_=null==r?void 0:r.printMode,b=null==r?void 0:r.header,Z=n.ENABLE_LAB_FEATURES&&(null==r?void 0:r.areLabFeaturesEnabled)==="true",x=(0,w.K3)({isOrgItem:h.isOrgItem,headerQuery:b,isEmbedded:!!e.isEmbedded,itemType:t});return P?(0,i.jsxs)(u.H,{areLabFeaturesEnabled:Z,children:[(0,i.jsx)(o.c,{children:(0,i.jsx)(a.B_,{storyItem:h,children:(0,i.jsx)(s.Z,{...e,itemType:t,query:r,signInUrl:m,storyItem:h,initialThemeItemInfo:y,mode:"view",shouldShowViewerHeader:x,printMode:_,redirectOnLoadError:l.q,avatar:(0,i.jsx)(f.Z,{}),appLogo:(0,i.jsx)(p.Z,{link:n.OVERVIEW_URL}),canJumpToLinkedBlock:!0})})}),(0,i.jsx)(c.Z,{itemId:h.itemId,itemMode:"published",allowPrint:!!_})]}):(0,i.jsx)(d.Z,{})});m.displayName="CommonViewPage",t.Z=m},32712:function(e,t,r){"use strict";r.r(t);var i=r(552322),n=r(746951),o=r(732558),a=r(685137),s=r(597209);let d=n.StoryItemType.Story,StoryViewPage=e=>(0,i.jsx)(s.Z,{...e,itemType:d});StoryViewPage.displayName="StoryViewPage",StoryViewPage.requiresAuthentication=!1,StoryViewPage.hasPageSpecificLocale=!0,StoryViewPage.getInitialProps=(0,a.b)({itemType:d,dataPreparer:o.A}),t.default=StoryViewPage},657070:function(e,t,r){"use strict";r.d(t,{c:function(){return StoryOffsetContextProvider}});var i=r(552322),n=r(202784),o=r(421639);let StoryOffsetContextProvider=class StoryOffsetContextProvider extends n.PureComponent{constructor(e){super(e),this.updateStoryOffsetContext=(e,t)=>{t?this.setState({...e,updateStoryOffsetContext:this.updateStoryOffsetContext}):this.setState(t=>({...t,...e,updateStoryOffsetContext:this.updateStoryOffsetContext}))},this.state={updateStoryOffsetContext:this.updateStoryOffsetContext,storyOffset:{navBarHeight:"0rem"}}}render(){return(0,i.jsx)(o.B.Provider,{value:this.state,children:this.props.children})}}},698526:function(e,t,r){"use strict";r.d(t,{H:function(){return LabFeatureProvider},J:function(){return injectLabFeature}});var i=r(552322),n=r(202784);let o=(0,n.createContext)({areLabFeaturesEnabled:!1}),LabFeatureProvider=e=>{let{children:t,areLabFeaturesEnabled:r}=e;return(0,i.jsx)(o.Provider,{value:{areLabFeaturesEnabled:r},children:t})},injectLabFeature=e=>t=>(0,i.jsx)(o.Consumer,{children:r=>(0,i.jsx)(e,{...t,...r})})},805876:function(e,t,r){"use strict";var i=r(552322),n=r(202784),o=r(933071),a=r(122640),s=r(139173);let trackActualPrint=()=>{s.Z.trackEvent(s.Z.Category.Viewer,s.Z.Action.Viewer_Print)},d=(0,n.memo)(e=>{let{routeTo:t,getUrlFromRouteDef:r}=(0,o.Gr)(),d=(0,n.useCallback)(i=>{if(e.allowPrint){trackActualPrint();return}null==i||i.preventDefault(),i&&s.Z.trackEvent({draft:s.Z.Category.Builder,published:s.Z.Category.Builder,preview:s.Z.Category.Builder}[e.itemMode],{draft:s.Z.Action.Builder_Print_Preview,published:s.Z.Action.Builder_Print_Preview,preview:s.Z.Action.Builder_Print_Preview}[e.itemMode],s.Z.Name.From_Keyboard);let n={route:{draft:"story-draft-print",published:"story-published-print",preview:"story-preview-print"}[e.itemMode],itemId:e.itemId};switch(e.itemMode){case"draft":t({method:"push",routeDef:n});return;case"published":case"preview":window.location.href=r(n);return;default:throw Error("invalid item mode")}},[t,r,e.itemId,e.allowPrint,e.itemMode]),u=(0,n.useCallback)(()=>{if(e.allowPrint){trackActualPrint();return}s.Z.trackEvent({draft:s.Z.Category.Builder,published:s.Z.Category.Viewer,preview:s.Z.Category.Viewer}[e.itemMode],{draft:s.Z.Action.Builder_Print_Preview,published:s.Z.Action.Viewer_Print_Preview,preview:s.Z.Action.Viewer_Print_Preview}[e.itemMode],s.Z.Name.From_Browser_Menu),d()},[d,e.allowPrint,e.itemMode]);return(0,n.useEffect)(()=>(window.addEventListener("beforeprint",u),()=>{window.removeEventListener("beforeprint",u)}),[u]),(0,i.jsx)(a.Z,{triggerKey:"p",isCtrl:!0,isMeta:!0,on:d})});t.Z=d}},function(e){e.O(0,[30724,70818,48834,38946,53743,3168,29491,65570,29793,12330,94745,27547,76289,78797,46483,40876,86261,49774,92888,40179],function(){return e(e.s=907335)}),_N_E=e.O()}]);