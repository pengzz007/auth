var TPL = {
    mapContent: template.compile(
        '<div class="map_warp_bd" style="width:<%= width %>px;height:<%= height %>px;">'
        +'    <div class="map_search">'
        +'        <input type="text" id="searchInput_<%= R %>" placeholder="请输入搜索地址" />'
        +'    </div>'
        +'    <div id="allmap_<%= R %>" class="map_content"></div>'
        +'    <div class="dib-wrap map_result">'
        +'        <p class="dib">经度：<input class="ui_map_lng" id="mapBDLng_<%= R %>" readonly="true" name="<%= lookupGroup %>.bdLng" value="<%= lng %>" /></p>'
        +'        <p class="dib">纬度：<input class="ui_map_lat" id="mapBDLat_<%= R %>" readonly="true" name="<%= lookupGroup %>.bdLat" value="<%= lat %>" /></p>'
        +'        <input type="hidden" id="mapTXLng_<%= R %>" name="<%= lookupGroup %>.txLng" /><input type="hidden" id="mapTXLat_<%= R %>" name="<%= lookupGroup %>.txLat" />'
        +'    </div>'
        +'</div>'
    ),

    mapInput: template.compile(
        '<div class="ui_dialog_map_wrap dib-wrap">'
        +   '<div class="ui_lng_wrap dib">'
        +       '<span>经度</span>'
        +       '<input id="mapDialogBDLng_<%= R %>" type="text" name="<%= lookupGroup %>.bdLng" value="<%= lng %>" />'
        +       '<input id="mapDialogTXLng_<%= R %>" type="hidden" name="<%= lookupGroup %>.txLng" value="<%= txLng %>" />'
        +   '</div>'
        +   '<div class="ui_lat_wrap dib">'
        +       '<span>纬度</span>'
        +       '<input id="mapDialogBDLat_<%= R %>" type="text" name="<%= lookupGroup %>.bdLat" value="<%= lat %>" />'
        +       '<input id="mapDialogTXLat_<%= R %>" type="hidden" name="<%= lookupGroup %>.txLat" value="<%= txLat %>" />'
        +   '</div>'
        +   '<a href="javascript:void(0);" data-opt=\'{type:"<%= type %>",title:"地图获取经纬度",width:"<%= width %>",height:"<%= height %>",lng:"<%= lng %>",lat:"<%= lat %>",R:"<%= R %>",lookupGroup:"<%= lookupGroup %>"}\' class="icon btn_map_dialog dib"></a>'
        +'</div>'
    ),

    mapDialog: template.compile(
        '<div class="map_dialog_content">'
        +'   <div class="js_map_warp" data-opt=\'{lng:"<%= lng %>",lat:"<%= lat %>",width:"<%= width %>",height:"<%= height %>",R:"<%= R %>",lookupGroup:"<%= lookupGroup %>"}\'></div>'
        +'</div>'
    ),

    goodsSpecHd: template.compile(
        '<input type="hidden" name="specStr" id="specStr" />'
        +'<ul class="spec_hd clearfix">'
        +'<% for(var i=0;i<specHd.length;i++){ %>'
        +'<li class="ui_col_<%= specHd[i].type == "number" ? 4 : 2 %>">'
        +'<% if(specHd[i].edit){ %>'
        +'    <input type="text" class="ui_text_input" value="<%= specHd[i].name %>" />'
        +'<% }else{ %>'
        +'    <span class="title"><%= specHd[i].name %></span>'
        +'<% } %>'
        +'</li>'
        +'<% } %>'
        +'<li class="ui_col_1 right"><span class="title">操作</span></li>'
        +'</ul>'


        +'<div class="spec_bd clearfix">'
        +'<% if(specBd == ""){'
        +'   specBd = [{value01: "货号会自动生成"}]'
        +'} %>'
        +'<% for(i = 0;i < specBd.length;i++){ %>'
        +'<ul class="spec_item clearfix">'
        +'   <% for(j=1;j<=7;j++){ name = specBd[i]["value0"+j] %>'
        +'      <li class="ui_col_<%= j == 1 ? 4 : 2 %>">'
        +'         <% if(j == 1){ %>'
        +'              <input type="text" class="ui_text_input" disabled="disabled" value="<%= name %>" />'
        +'         <% }else{ %>'
        +'              <input type="text" class="ui_text_input" value="<%= name %>" />'
        +'         <% } %>'
        +'      </li>'
        +'   <% } %>'
        +'   <% if(i == 0){ %>'
        +'      <li class="ui_col_1 right" data-status="empty"><span>无</span></li>'
        +'   <% }else{ %>'
        +'      <li class="ui_col_1 right"><a href="javascript:void(0);" target="specDel" class="btn_del">删除</a></li>'
        +'   <% } %>'
        +'</ul>'
        +'<% } %>'
        +'</div>'

        +'<div class="ui_col_17 left"><a href="javascript:goodsSpecCopy();" class="btn_add">添加新的规格属性</a></div>'
    ),

    goodPrice: template.compile(
        '<div class="ui_col_6">'
        +'    <span class="ui_label">原价</span>'
        +'    <input type="text" class="ui_text_input"  data-opt=\'{'
        +'        type: "require price",'
        +'        msg: "原价必填 价格格式不对"'
        +'    }\'  name="sprice" value=""/>'
        +'</div>'
        +'<div class="ui_col_6">'
        +'    <span class="ui_label">优惠价</span>'
        +'    <input type="text" class="ui_text_input" data-opt=\'{'
        +'        type: "require price",'
        +'        msg: "优惠价必填 优惠价格式不对"'
        +'    }\'   name="price" value=""/>'
        +'</div>'
        +'<div class="ui_col_6">'
        +'    <span class="ui_label">库存</span>'
        +'    <input type="text" class="ui_text_input" data-opt=\'{'
        +'        type: "require number",'
        +'        msg: "库存必填 库存格式不对"'
        +'    }\' name="stock" value=""/>'
        +'</div>'
    ),

    imageUpload: template.compile(
        '<li>'
        +'    <div class="img_wrap">'
        +'        <input type="hidden" class="js_hidden_file"'
        +'        name="img[]"'
        +'        value=""'
        +'        data-opt=\'{'
        +'            fileType: "img",'
        +'            width: "<%= imgW %>",'
        +'            height: "<%= imgH %>",'
        +'            btnHeight: "35",'
        +'            name: "图片上传",'
        +'            title: "缩略图",'
        +'            thumb: "" }\''
        +'        />'
        +'    </div>'
        +'    <p class="img_desc">'
        +'        <textarea name="desc[]" placeHolder="请输入图片描述"></textarea>'
        +'    </p>'
        +'    <div class="li_tools">'
        +'        <a href="javascript:void(0);" data-type="up" class="js_imgitem_sort">上移</a>'
        +'        <a href="javascript:void(0);" data-type="dowm" class="js_imgitem_sort">下移</a>'
        +'        <a href="javascript:void(0);" class="js_imgitem_del">删除</a>'
        +'    </div>'
        +'</li>'
    )
}

