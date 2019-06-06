// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,
    editor: {
        requireComponent: sp.Skeleton
    },

    properties: {
        label:{
            default: null,
            type: cc.Label
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        cc.loader.loadRes('loadSpine/alien-ess', sp.SkeletonData, this.onProcess.bind(this), this.onComplete.bind(this));
    },

    onProcess(completeCount, totalCount, item) {

    },

    onComplete(err, res) {
        if(err) {
            // this.label.textKey = i18n.t('sprite_loadRes_asset_failed');
            this.label.string = "sprite_loadRes_asset_failed";
            cc.error(err);
        }
        let spine = this.getComponent("sp.Skeleton");
        spine.skeletonData = res;
        let animate = spine.setAnimation(0, 'run', true);
        // this.label.textKey = i18n.t("sprite_loadRes_asset_success");
        this.label.string = "sprite_loadRes_asset_success";
    }
    // update (dt) {},
});
