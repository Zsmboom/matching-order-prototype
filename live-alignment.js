/* 运营中台现网页面对齐层（2026-09-28）。
   仅覆盖本次核对的七个运营页面；企业日/月账单及其抽屉保留此前新增方案。 */
const LIVE = {
  orders:[
    {no:'MH20260922140500000001',time:'2026-09-22 14:05:49',source:'正常下单',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例柴油站',stationCo:'示例能源有限公司',energy:'柴油',goods:'-10#车用柴油',qty:'0.075 L',nozzle:'01',machinePrice:'8.00',enterprisePrice:'8.00',machineAmount:0.60,amount:0.60,payment:'一键支付无核销',status:'支付成功',verify:'无需核销',invoice:'已开票',customerFee:0,stationFee:0.09,feeState:'已收',apply:'KP2100000000000000001',refundable:false},
    {no:'MH20260922140800000002',time:'2026-09-22 14:08:51',source:'正常下单',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例柴油站',stationCo:'示例能源有限公司',energy:'柴油',goods:'-10#车用柴油',qty:'0.1125 L',nozzle:'02',machinePrice:'8.00',enterprisePrice:'8.00',machineAmount:0.90,amount:0.90,payment:'一键支付无核销',status:'支付成功',verify:'无需核销',invoice:'已开票',customerFee:0,stationFee:0.14,feeState:'已收',apply:'KP2100000000000000001',refundable:false},
    {no:'MH20260922142200000003',time:'2026-09-22 14:22:17',source:'运营补单',customer:'示例物流有限公司',driver:'李师傅',phone:'131****8501',plate:'鲁A00001',station:'示例柴油站',stationCo:'示例能源有限公司',energy:'柴油',goods:'-10#车用柴油',qty:'0.0625 L',nozzle:'03',machinePrice:'8.00',enterprisePrice:'8.00',machineAmount:0.50,amount:0.50,payment:'一键支付无核销',status:'支付成功',verify:'无需核销',invoice:'已开票',customerFee:0,stationFee:0.08,feeState:'已收',apply:'KP2100000000000000001',refundable:false},
    {no:'MH20260922132900000004',time:'2026-09-22 13:29:01',source:'正常下单',customer:'示例运输有限公司',driver:'陈师傅',phone:'183****0001',plate:'苏U342598',station:'示例天然气站',stationCo:'示例能源有限公司',energy:'天然气',goods:'LNG',qty:'0.08 kg',nozzle:'02',machinePrice:'6.25',enterprisePrice:'6.25',machineAmount:0.50,amount:0.50,payment:'一键支付无核销',status:'支付成功',verify:'无需核销',invoice:'开票中',customerFee:0.03,stationFee:0.05,feeState:'已收',apply:'KP2100000000000000002',refundable:false},
    {no:'MH20260923200500000005',time:'2026-09-23 20:05:09',source:'运营补单',customer:'示例运输有限公司',driver:'赵师傅',phone:'198****6650',plate:'京A66778',station:'示例一键支付站',stationCo:'示例能源有限公司',energy:'天然气',goods:'LNG',qty:'0.02 kg',nozzle:'01',machinePrice:'5.00',enterprisePrice:'5.00',machineAmount:0.10,amount:0.10,payment:'一键支付无核销',status:'支付成功',verify:'待核销',invoice:'未开票',customerFee:0,stationFee:0,feeState:'无服务费',apply:'—',refundable:false},
    {no:'MH20260928150700000006',time:'2026-09-28 15:07:26',source:'正常下单',customer:'示例运输有限公司',driver:'陈师傅',phone:'183****0001',plate:'苏U342598',station:'示例柴油站',stationCo:'示例能源有限公司',energy:'柴油',goods:'-10#车用柴油',qty:'0.0125 L',nozzle:'04',machinePrice:'8.00',enterprisePrice:'8.00',machineAmount:0.10,amount:0.10,payment:'一键支付无核销',status:'支付成功',verify:'待核销',invoice:'未开票',customerFee:0,stationFee:0.01,feeState:'已收',apply:'—',refundable:true},
    {no:'MH20260928110900000007',time:'2026-09-28 11:09:33',source:'正常下单',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例天然气站',stationCo:'示例能源有限公司',energy:'天然气',goods:'LNG',qty:'0.02 kg',nozzle:'01',machinePrice:'5.00',enterprisePrice:'5.00',machineAmount:0.10,amount:0.10,payment:'一键支付无核销',status:'退款成功',verify:'无需核销',invoice:'未开票',customerFee:0,stationFee:0.01,feeState:'已退',apply:'—',refundable:false}
  ],
  fees:[
    {no:'2109000000000000001',third:'PT1026092815000000010000004',order:'MH20260922140500000001',time:'2026-09-22 14:05:49',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.09,oilAmount:0.60,rate:'15.05%',payment:'已收',invoice:'开票中',energyInvoice:'已开票',energyApply:'KP2100000000000000001',feeApply:'FZK2100000000000000001'},
    {no:'2109000000000000002',third:'PT1026092214000000010000002',order:'MH20260922140800000002',time:'2026-09-22 14:08:51',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.14,oilAmount:0.90,rate:'15.05%',payment:'已收',invoice:'开票中',energyInvoice:'已开票',energyApply:'KP2100000000000000001',feeApply:'FZK2100000000000000001'},
    {no:'2109000000000000003',third:'PT1026092214000000010000003',order:'MH20260922142200000003',time:'2026-09-22 14:22:17',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.08,oilAmount:0.50,rate:'15.05%',payment:'已收',invoice:'开票中',energyInvoice:'已开票',energyApply:'KP2100000000000000001',feeApply:'FZK2100000000000000001'},
    {no:'2109000000000000004',third:'RF1026092811000000010000001',order:'MH20260928110900000007',time:'2026-09-28 11:16:51',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例天然气站',amount:-0.01,oilAmount:0.10,rate:'10.00%',payment:'已收',invoice:'未开票',energyInvoice:'未开票',energyApply:'—',feeApply:'—'},
    {no:'2109000000000000005',third:'PT1026092214000000010000001',order:'MH20260928150700000006',time:'2026-09-28 15:07:30',payer:'油站',payerName:'示例能源有限公司',customer:'示例运输有限公司',station:'示例柴油站',amount:0.01,oilAmount:0.10,rate:'10.00%',payment:'已收',invoice:'未开票',energyInvoice:'未开票',energyApply:'—',feeApply:'—'},
    {no:'2109000000000000006',third:'PT1026092213000000010000005',order:'MH20260922132900000004',time:'2026-09-22 13:29:01',payer:'油站',payerName:'示例能源有限公司',customer:'示例运输有限公司',station:'示例天然气站',amount:0.05,oilAmount:0.50,rate:'10.00%',payment:'已收',invoice:'已开票',energyInvoice:'开票中',energyApply:'KP2100000000000000002',feeApply:'FZK2100000000000000002'},
    {no:'2109000000000000007',third:'PT1026092213000000010000006',order:'MH20260922132900000004',time:'2026-09-22 13:29:01',payer:'客户',payerName:'示例运输有限公司',customer:'示例运输有限公司',station:'示例天然气站',amount:0.03,oilAmount:0.50,rate:'6.00%',payment:'已收',invoice:'开票中',energyInvoice:'开票中',energyApply:'KP2100000000000000002',feeApply:'FZK2100000000000000004'}
  ],
  refunds:[
    {no:'MHRF202609241342000001',order:'MH20260923200500000005',customer:'示例运输有限公司',driver:'赵师傅',phone:'198****6650',plate:'京A66778',station:'示例一键支付站',amount:0.10,fee:0,reason:'现场申请整单退款',source:'运营补单',status:'待审核',time:'2026-09-24 13:42:03'},
    {no:'MHRF202609281116000002',order:'MH20260928110900000007',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例天然气站',amount:0.10,fee:0.01,reason:'重复下单',source:'正常下单',status:'退款成功',time:'2026-09-28 11:16:27'}
  ],
  energyInvoices:[
    {no:'KP2100000000000000001',batch:'BAT202609220001',customer:'示例物流有限公司',status:'已开票',time:'2026-09-22 20:19:42',stationCo:'示例能源有限公司',energy:'柴油',rate:'13%',orders:['MH20260922140500000001','MH20260922140800000002','MH20260922142200000003'],amount:2,qty:'0.25 L',files:['能源发票_01.pdf']},
    {no:'KP2100000000000000002',batch:'BAT202609220002',customer:'示例运输有限公司',status:'开票中',time:'2026-09-22 13:29:01',stationCo:'示例能源有限公司',energy:'天然气',rate:'9%',orders:['MH20260922132900000004'],amount:0.50,qty:'0.08 kg',files:[]},
    {no:'KP2100000000000000003',batch:'BAT202609210003',customer:'示例物流有限公司',status:'已撤销',time:'2026-09-21 14:05:31',stationCo:'示例能源有限公司',energy:'柴油',rate:'13%',orders:[],amount:0.01,qty:'0.00125 L',files:[]}
  ],
  feeInvoices:[
    {no:'FZK2100000000000000001',payerName:'示例能源有限公司',payer:'油站承担',status:'开票中',orders:['2109000000000000001','2109000000000000002','2109000000000000003'],amount:0.31,time:'2026-09-22 20:26:04',files:[]},
    {no:'FZK2100000000000000002',payerName:'示例能源有限公司',payer:'油站承担',status:'已开票',orders:['2109000000000000006'],amount:0.05,time:'2026-09-22 14:36:33',files:['服务费发票_01.pdf']},
    {no:'FZK2100000000000000003',payerName:'示例能源有限公司',payer:'油站承担',status:'已撤销',orders:['2109000000000000006'],amount:0.05,time:'2026-09-22 14:35:06',files:[]},
    {no:'FZK2100000000000000004',payerName:'示例运输有限公司',payer:'企业承担',status:'开票中',orders:['2109000000000000007'],amount:0.03,time:'2026-09-22 14:37:01',files:[]}
  ],
  feeFlows:[
    {no:'PT1026092214000000010000001',time:'2026-09-28 15:07:30',company:'示例能源有限公司',type:'油站费入账',amount:0.01,before:6.64,after:6.65,order:'MH20260928150700000006',account:'YB-1001'},
    {no:'PT1026092811000000010000007',time:'2026-09-28 11:18:00',company:'示例能源有限公司',type:'油站费退款',amount:-0.01,before:6.59,after:6.58,order:'MH20260928103100000008',account:'YB-1001'},
    {no:'RF1026092811000000010000001',time:'2026-09-28 11:16:51',company:'示例能源有限公司',type:'油站费退款',amount:-0.01,before:6.60,after:6.59,order:'MH20260928110900000007',account:'YB-1001'},
    {no:'PT1026092811000000010000008',time:'2026-09-28 11:09:38',company:'示例能源有限公司',type:'油站费入账',amount:0.01,before:6.59,after:6.60,order:'MH20260928110900000007',account:'YB-1001'}
  ],
  withdrawals:[
    {no:'SW202609231642000001',time:'2026-09-23 16:42:30',company:'示例能源有限公司',accountName:'柴油撮合账户',account:'AC2100000000000000000000000000000001',energy:'柴油',amount:0.10,status:'提现成功',bank:'招商银行',bankCard:'**** **** **** 1234',person:'张经理',phone:'185****8691',finish:'2026-09-23 16:42:32',third:'181026092700000000000000001'},
    {no:'SW202609231641000002',time:'2026-09-23 16:41:56',company:'示例能源有限公司',accountName:'柴油撮合账户',account:'AC2100000000000000000000000000000001',energy:'柴油',amount:0.01,status:'提现失败',bank:'招商银行',bankCard:'**** **** **** 1234',person:'张经理',phone:'185****8691',finish:'—',third:'—'}
  ]
};

const LIVE_FILTERS = {
  orders:[['订单编号','no','text','总单号/子单号'],['订单来源','source','select',['正常下单','运营补单']],['客户公司','customer','text','消费公司/付款公司'],['司机信息','driver','text','姓名/手机号'],['油站名称','station','text','油站公司/网点'],['支付方式','payment','select',['一键支付无核销']],['订单状态','status','select',['支付成功','退款成功','支付失败']],['时间范围','time','range','']],
  fee:[['服务费流水号','no','text','输入服务费流水号'],['关联订单号','order','text','输入能源订单号'],['出账周期','time','month',''],['支付状态','payment','select',['已收','待收']],['服务费开票状态','invoice','select',['未开票','开票中','已开票']],['支付方','payerName','text','输入支付方名称'],['油站','station','text','输入油站名称'],['能源发票申请单号','energyApply','text','KP 开头'],['能源订单开票状态','energyInvoice','select',['未开票','开票中','已开票']]],
  refund:[['退款编号','no','text','输入退款编号'],['原订单号','order','text','输入撮合总单号'],['客户公司','customer','text','输入客户公司'],['油站名称','station','text','输入油站名称'],['退款状态','status','select',['待审核','退款处理中','退款成功','已拒绝']],['申请时间','time','range','']],
  energyInvApply:[['开票日期','time','range',''],['发票状态','status','select',['开票中','已开票','已撤销']],['申请单号','no','text','KP 开头，字母数字'],['提交批次号','batch','text','BAT 开头，字母数字'],['油站公司','stationCo','text','输入油站公司'],['能源类型','energy','select',['柴油','天然气','尿素']],['申请金额','amount','amountRange','']],
  feeInvApply:[['申请单号','no','text','FZK 开头，字母数字'],['申请时间','time','range',''],['申请状态','status','select',['开票中','已开票','已撤销']],['支付方','payer','select',['油站承担','企业承担']],['申请金额','amount','amountRange',''],['支付方名称','payerName','text','油站公司或客户企业']],
  serviceFee:[['交易类型','type','select',['客户费入账','油站费入账','客户费退款','油站费退款','提现']],['来源公司','company','text','输入公司名称关键词'],['易宝流水号','no','text','输入易宝流水号'],['订单号','order','text','输入订单号'],['发生时间','time','range','']],
  withdrawRecord:[['提现单号','no','text','输入提现单号'],['网点公司','company','select',['示例能源有限公司']],['账户名称','accountName','text','输入账户名称'],['账号','account','text','输入账号'],['能源类型','energy','select',['柴油','天然气','尿素']],['提现状态','status','select',['提现成功','提现失败','处理中']],['提现时间','time','range','']]
};
const liveQuery = {};
function liveFilters(page){
  return '<div class="card"><div class="filters">'+LIVE_FILTERS[page].map(([label,key,type,opt])=>{
    const id='live-'+page+'-'+key, value=liveQuery[page]?.[key]||'';
    const control=type==='select'
      ?'<select class="inp" id="'+id+'"><option value="">全部</option>'+opt.map(x=>'<option'+(x===value?' selected':'')+'>'+x+'</option>').join('')+'</select>'
      :type==='range'||type==='amountRange'
      ?'<input class="inp" id="'+id+'-start" type="'+(type==='range'?'date':'number')+'" '+(type==='amountRange'?'min="0" step="0.01"':'')+' placeholder="最小" value="'+(Array.isArray(value)?value[0]:'')+'"><span class="dash">～</span><input class="inp" id="'+id+'-end" type="'+(type==='range'?'date':'number')+'" '+(type==='amountRange'?'min="0" step="0.01"':'')+' aria-label="'+label+'结束值" placeholder="最大" value="'+(Array.isArray(value)?value[1]:'')+'">'
      :'<input class="inp" id="'+id+'" type="'+(type==='month'?'month':type==='date'?'date':type==='number'?'number':'text')+'" placeholder="'+(Array.isArray(opt)?'':opt)+'" value="'+value+'">';
    return '<div class="f"><label for="'+id+(type==='range'||type==='amountRange'?'-start':'')+'">'+label+'</label><div class="fc">'+control+'</div></div>';
  }).join('')+'</div><div class="filter-actions"><button class="btn primary" onclick="liveSearch(\''+page+'\')">搜索</button><button class="btn" onclick="liveReset(\''+page+'\')">重置</button></div></div>';
}
function liveSearch(page){
  liveQuery[page]={};
  LIVE_FILTERS[page].forEach(([,key,type])=>{
    const id='live-'+page+'-'+key;
    liveQuery[page][key]=type==='range'||type==='amountRange'
      ?[document.getElementById(id+'-start').value.trim(),document.getElementById(id+'-end').value.trim()]
      :document.getElementById(id).value.trim();
  });
  paint();
}
function liveReset(page){delete liveQuery[page];paint();}
function liveRows(page){
  const name={orders:'orders',fee:'fees',refund:'refunds',energyInvApply:'energyInvoices',feeInvApply:'feeInvoices',serviceFee:'feeFlows',withdrawRecord:'withdrawals'}[page];
  const q=liveQuery[page]||{};
  return LIVE[name].filter(r=>Object.entries(q).every(([key,value])=>{
    if(Array.isArray(value)){
      if(!value[0]&&!value[1]) return true;
      const current=key==='amount'?Number(r.amount):String(r[key]||'').slice(0,10);
      const lower=value[0]?(key==='amount'?Number(value[0]):value[0]):null;
      const upper=value[1]?(key==='amount'?Number(value[1]):value[1]):null;
      return (lower===null||current>=lower)&&(upper===null||current<=upper);
    }
    if(!value) return true;
    const searchable=page==='orders'&&key==='driver'?r.driver+' '+r.phone:
      page==='orders'&&key==='station'?r.station+' '+r.stationCo:r[key];
    return String(searchable??'').toLowerCase().includes(value.toLowerCase());
  }));
}
function liveTable(headers,rows,width='1500px'){
  return '<div class="tablewrap"><table style="min-width:'+width+'"><thead><tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+ (rows.length?rows.join(''):'<tr><td class="empty" colspan="'+headers.length+'">暂无符合条件的数据</td></tr>')+'</tbody></table></div>';
}
const liveMoney = n=>'¥'+money(n);
const liveAct=(kind,key,label='详情')=>'<button type="button" onclick="liveDrawer(\''+kind+'\',\''+key+'\')">'+label+'</button>';
const liveBtn=(kind,key,label)=>'<button type="button" class="btn sm" onclick="liveModal(\''+kind+'\',\''+key+'\')">'+label+'</button>';
const liveBadge=s=>pill(s);
function liveExport(page){showToast('已按当前筛选条件提交导出任务，请在下载中心查看');}
function liveSection(title,rows){
  return '<div class="card"><div class="card-b"><div class="sec-title">'+title+'</div><dl class="kv">'+rows.map(([k,v])=>'<dt>'+k+'</dt><dd>'+v+'</dd>').join('')+'</dl></div></div>';
}
function liveHead(title,subtitle,status,amount,label){
  return '<div class="sumhead"><div class="no mono">'+title+'</div><div class="sec">'+subtitle+'</div><div class="pills">'+liveBadge(status)+'</div><div class="money"><div class="oilv"><div class="l">'+label+'</div><div class="v num">'+liveMoney(amount)+'</div></div></div></div>';
}
function liveListCard(title,extra,headers,rows,width){
  return '<div class="card"><div class="card-h"><h2>'+title+'</h2><span class="title-stat">共 <b>'+rows.length+'</b> 条</span><span class="spacer"></span>'+extra+'</div>'+liveTable(headers,rows,width)+pagerHTML(rows.length)+'</div>';
}

VIEWS.orders=()=>{
  const list=liveRows('orders');
  const rows=list.map(o=>'<tr><td><input type="checkbox" class="live-order-check" value="'+o.no+'" '+(o.invoice==='未开票'&&o.status==='支付成功'&&!LIVE.refunds.some(r=>r.order===o.no&&r.status==='待审核')?'':'disabled')+' aria-label="选择订单 '+o.no+'"></td><td><b class="mono">'+o.no+'</b><div class="t2">'+o.time+' · '+o.source+'</div></td><td>'+liveBadge(o.status)+'<div class="t2">'+o.verify+'</div></td><td>'+liveBadge(o.invoice)+'</td><td>'+o.customer+'<div class="t2">撮合账户 · '+o.energy+'</div></td><td>'+o.driver+' · '+o.phone+'<div class="t2">'+o.plate+'</div></td><td>'+o.station+'<div class="t2">'+o.stationCo+'</div></td><td>'+o.goods+'<div class="t2">'+o.qty+' · 油机价 '+o.machinePrice+' · 企业价 '+o.enterprisePrice+'</div></td><td class="num">'+liveMoney(o.amount)+'</td><td>客户 '+liveMoney(o.customerFee)+' · 油站 '+liveMoney(o.stationFee)+'<div class="t2">'+o.feeState+'</div></td><td class="acts">'+liveAct('order',o.no)+(o.refundable?' '+liveBtn('refundApply',o.no,'申请退款'):'')+'</td></tr>');
  return liveFilters('orders')+liveListCard('能源订单管理','<button class="btn sm" onclick="liveDrawer(\'backfill\',\'new\')">撮合订单补单</button><button class="btn sm primary" onclick="liveModal(\'energyBatch\',\'\')">批量申请开票</button><button class="btn sm" onclick="liveExport(\'orders\')">导出</button>', ['选择','订单信息','订单状态','开票状态','客户公司','司机与车辆','油站 / 油站公司','加注油品','金额信息','服务费','操作'],rows,'2400px')+notes(nb('实际页面口径','<p>支付、核销、退款、服务费与发票分别维护状态。能源订单编号以 MH 开头；退款申请仅适用于待核销的一键支付订单。列表中的客户与油站服务费分别显示，客户无服务费时金额为 0。</p>'));
};
VIEWS.fee=()=>{
  const list=liveRows('fee');
  const rows=list.map(f=>'<tr><td><input type="checkbox" class="live-fee-check" value="'+f.no+'" '+(f.amount>0&&f.invoice==='未开票'?'':'disabled')+' aria-label="选择服务费流水 '+f.no+'"></td><td class="mono">'+f.no+'</td><td class="mono">'+f.third+'</td><td class="mono">'+f.order+'</td><td class="mono">'+f.time+'</td><td>'+f.payer+'<div class="t2">'+f.payerName+'</div></td><td>'+f.customer+'</td><td>'+f.station+'</td><td class="num">'+liveMoney(f.amount)+'</td><td>'+liveBadge(f.payment)+'</td><td>'+liveBadge(f.invoice)+'</td><td>'+liveBadge(f.energyInvoice)+'</td><td class="mono">'+f.energyApply+'</td><td class="acts">'+liveAct('fee',f.no)+'</td></tr>');
  return liveFilters('fee')+liveListCard('服务费订单管理','<button class="btn sm primary" onclick="liveModal(\'feeBatch\',\'\')">批量申请开票</button><button class="btn sm" onclick="liveExport(\'fee\')">导出</button>', ['选择','服务费流水号','三方服务费交易流水号','关联加油订单','发生时间','支付方','关联客户','关联油站','服务费金额','支付状态','服务费开票状态','能源订单开票状态','能源发票申请单号','操作'],rows,'2400px')+notes(nb('关联与金额口径','<p>一条服务费流水是一条独立业务事实；退款冲销可出现负金额。能源订单开票状态与能源发票申请单号读取明确关联的能源订单及申请单，缺少可靠关系显示“—”。服务费开票状态独立维护。</p>'));
};
VIEWS.refund=()=>{
  const list=liveRows('refund');
  const rows=list.map(r=>'<tr><td><b class="mono">'+r.no+'</b><div class="t2">整单全额退款</div></td><td class="mono">'+r.order+'<div class="t2">'+r.customer+'</div></td><td>'+r.driver+' · '+r.phone+'<div class="t2">'+r.plate+'</div></td><td>'+r.station+'</td><td class="num">'+liveMoney(r.amount)+'<div class="t2">双方服务费影响 '+liveMoney(r.fee)+'</div></td><td>'+r.reason+'<div class="t2">'+r.source+'</div></td><td>'+liveBadge(r.status)+'<div class="t2">'+r.time+'</div></td><td class="acts">'+liveAct('refund',r.no)+(r.status==='待审核'?' '+liveAct('refundAudit',r.no,'审核'):'')+'</td></tr>');
  return liveFilters('refund')+'<div class="card"><div class="card-b">待油站审核 <b>1</b>　退款处理中 <b>0</b>　本月已退款 <b>¥0.10</b></div></div>'+liveListCard('退款申请管理','<button class="btn sm" onclick="liveExport(\'refund\')">导出</button>', ['退款申请','原订单与客户','司机与车辆','油站','退款金额','申请原因','状态与时间','操作'],rows,'1550px')+notes(nb('退款资格与影响','<p>当前撮合退款仅支持待核销一键支付订单的整单全额退款。审核通过后，商品本金原路退回，已支付服务费原路退回、未支付服务费取消应收，关联网货子单冲销并恢复司机扣减或补贴。申请处理中暂停核销和新开票。</p>'));
};
VIEWS.energyInvApply=()=>{
  const list=liveRows('energyInvApply');
  const rows=list.map(a=>'<tr><td><input type="checkbox" class="live-energy-invoice-check" value="'+a.no+'" '+(a.files.length?'':'disabled')+' aria-label="选择申请单 '+a.no+'"></td><td class="mono">'+a.no+'</td><td>'+a.customer+'</td><td>'+liveBadge(a.status)+'</td><td class="mono">'+a.time+'</td><td>'+a.stationCo+'</td><td>'+a.energy+'</td><td>'+a.rate+'</td><td class="num">'+a.orders.length+'</td><td class="num">'+money(a.amount)+'</td><td>'+a.qty+'</td><td class="num">'+a.files.length+'</td><td class="mono">'+a.batch+'</td><td class="acts">'+liveAct('energyInvoice',a.no)+(a.status==='开票中'?liveBtn('energyUpload',a.no,'上传发票')+' '+liveBtn('energyCancel',a.no,'撤销申请'):a.files.length?'<button onclick="showToast(\'发票下载已开始\')">下载发票</button>':'')+'</td></tr>');
  return liveFilters('energyInvApply')+liveListCard('能源发票管理','<button class="btn sm" data-go="orders">去订单列表勾选开票</button><button class="btn sm" onclick="liveModal(\'energyDownload\',\'\')">批量下载发票</button><button class="btn sm" onclick="liveExport(\'energyInvApply\')">导出</button>', ['选择','申请单号','客户企业','申请状态','申请时间','油站公司','能源类型','税率','关联订单数','申请金额','合计数量','发票张数','提交批次号','操作'],rows,'2050px')+notes(nb('编号与状态','<p>KP 申请单号标识拆分后的发票申请；BAT 提交批次号标识一次批量提交，同一批次可有多张 KP 申请。申请状态采用开票中、已开票、已撤销；上传发票后变为已开票。</p>'));
};
VIEWS.feeInvApply=()=>{
  const list=liveRows('feeInvApply');
  const rows=list.map(a=>'<tr><td><input type="checkbox" class="live-fee-invoice-check" value="'+a.no+'" '+(a.files.length?'':'disabled')+' aria-label="选择申请单 '+a.no+'"></td><td class="mono">'+a.no+'</td><td>'+a.payerName+'</td><td>'+liveBadge(a.status)+'</td><td>'+a.payer+'</td><td class="num">'+a.orders.length+'</td><td class="num">'+money(a.amount)+'</td><td class="mono">'+a.time+'</td><td class="acts">'+liveAct('feeInvoice',a.no)+(a.status==='开票中'?liveBtn('feeUpload',a.no,'上传发票')+' '+liveBtn('feeCancel',a.no,'撤销申请'):a.files.length?'<button onclick="showToast(\'发票下载已开始\')">下载发票</button>':'')+'</td></tr>');
  return liveFilters('feeInvApply')+liveListCard('服务费发票管理','<button class="btn sm" onclick="liveModal(\'feeDownload\',\'\')">批量下载发票</button><button class="btn sm" data-go="fee">去订单列表勾选开票</button><button class="btn sm" onclick="liveExport(\'feeInvApply\')">导出</button>', ['选择','申请单号','支付方名称','申请状态','支付方','关联订单数','申请金额','申请时间','操作'],rows,'1350px')+notes(nb('申请与文件','<p>申请单以 FZK 开头，按支付方拆分。运营平台可在开票中上传发票或撤销申请；已开票可下载文件。订单明细仅在详情抽屉查看，本次不增加申请单列表中的订单明细入口。</p>'));
};
VIEWS.serviceFee=()=>{
  const list=liveRows('serviceFee');
  const rows=list.map(f=>'<tr><td class="mono">'+f.no+'</td><td class="mono">'+f.time+'</td><td>'+f.company+'</td><td>'+f.type+'</td><td class="num">'+(f.amount>0?'+':'')+money(f.amount)+'</td><td class="num">'+money(f.before)+'</td><td class="num">'+money(f.after)+'</td><td class="mono">'+f.order+'</td><td class="acts">'+liveAct('feeFlow',f.no)+'</td></tr>');
  return '<div class="card"><div class="card-h"><h2>服务费账户</h2></div><div class="card-b" style="display:flex;gap:18px"><div class="sumhead" style="flex:1"><div class="l">可提现余额 · 平台服务费账户</div><div class="v num" style="font-size:24px">¥6.65</div></div><div class="sumhead" style="flex:1"><div class="l">累计服务费收入 · 从开通至今</div><div class="v num" style="font-size:24px">¥7.62</div></div></div></div>'+liveFilters('serviceFee')+liveListCard('服务费流水明细','<button class="btn sm" onclick="liveExport(\'serviceFee\')">导出</button>', ['易宝流水号','发生时间','来源公司','交易类型','变动金额(元)','上次余额(元)','当前余额(元)','订单号','操作'],rows,'1400px')+notes(nb('流水口径','<p>变动金额入账为正、退款为负；当前余额等于上次余额加变动金额。详情抽屉展示易宝流水号、订单号和账户编号。</p>'));
};
VIEWS.withdrawRecord=()=>{
  const list=liveRows('withdrawRecord');
  const rows=list.map(w=>'<tr><td class="mono">'+w.no+'<div class="t2">'+w.time+'</div></td><td>'+w.company+'<div class="t2">'+w.accountName+' · '+w.account+'</div></td><td>'+w.energy+'</td><td class="num">'+liveMoney(w.amount)+'</td><td>'+liveBadge(w.status)+'</td><td>'+w.bank+'<div class="t2">'+w.bankCard+'</div></td><td>'+w.person+'<div class="t2">'+w.phone+'</div></td><td class="acts">'+liveAct('withdraw',w.no)+'</td></tr>');
  return liveFilters('withdrawRecord')+liveListCard('提现记录','<button class="btn sm" onclick="liveExport(\'withdrawRecord\')">导出</button>', ['提现单号 / 提现时间','网点公司 / 提现账户','能源类型','提现金额','状态','到账银行卡','提现人','操作'],rows,'1450px')+notes(nb('数据展示','<p>提现记录按网点公司与账户查询；银行卡仅展示脱敏卡号。详情含三方交易流水、完成时间与处理进度。此页是运营平台财务中心的独立菜单。</p>'));
};

function liveOrderInfo(o){
  return liveHead(o.no,o.time+' · '+o.source,o.status,o.amount,'商品款支付金额')+
    liveSection('客户、油站与司机',[
      ['客户公司',o.customer],['油站 / 油站公司',o.station+' / '+o.stationCo],['支付方式',o.payment],
      ['司机',o.driver+' · '+o.phone],['车牌号',o.plate],['能源类型',o.energy]
    ])+
    liveSection('订单与商品',[
      ['订单编号',o.no],['订单来源',o.source],['补单授权',o.source==='运营补单'?'已授权':'不适用'],
      ['商品',o.goods],['实际数量',o.qty],['油枪号',o.nozzle],['油机价',o.machinePrice+' 元'],
      ['企业成交价',o.enterprisePrice+' 元'],['油机金额',liveMoney(o.machineAmount)],['商品款',liveMoney(o.amount)],
      ['车辆识别',o.plate]
    ])+
    liveSection('服务费',[
      ['客户服务费',liveMoney(o.customerFee)],['客户服务费状态',o.customerFee?'已收':'无服务费'],
      ['油站服务费',liveMoney(o.stationFee)],['油站服务费状态',o.feeState]
    ])+
    liveSection('创建与时间',[
      ['创建人',o.source==='运营补单'?'运营人员':'司机'],['订单时间',o.time],['支付时间',o.time],
      ['核销状态',o.verify],['开票状态',o.invoice],['最近修改时间',o.time]
    ]);
}
function liveOrderInvoice(o){
  const apps=LIVE.energyInvoices.filter(a=>a.orders.includes(o.no));
  return liveHead(o.no,o.time,o.invoice,o.amount,'能源订单金额')+
    '<div class="card"><div class="card-b"><div class="sec-title">开票列表</div><p class="note">展示当前订单的发票主体与金额；此处只读，开票申请从订单列表勾选发起。</p>'+
    liveTable(['申请单号','提交批次号','开票方','受票方','订单金额','申请状态'],
      apps.map(a=>'<tr><td class="mono">'+a.no+'</td><td class="mono">'+a.batch+'</td><td>'+a.stationCo+'</td><td>'+a.customer+'</td><td class="num">'+liveMoney(o.amount)+'</td><td>'+liveBadge(a.status)+'</td></tr>'),'900px')+
    '</div></div>';
}
function liveOrderRefund(o){
  const rs=LIVE.refunds.filter(r=>r.order===o.no);
  return liveHead(o.no,o.time,o.status,o.amount,'原订单金额')+
    (rs.length?liveTable(['退款编号','退款类型','退款金额','申请原因','状态'],rs.map(r=>'<tr><td class="mono">'+r.no+'</td><td>整单全额退款</td><td>'+liveMoney(r.amount)+'</td><td>'+r.reason+'</td><td>'+liveBadge(r.status)+'</td></tr>'),'850px')
      :'<div class="card"><div class="empty">当前订单暂无退款记录</div></div>');
}
function liveOrderLogs(o){
  return liveHead(o.no,o.time,o.status,o.amount,'商品款支付金额')+
    liveSection('操作日志',[
      ['订单创建',o.time+' · 创建人：'+(o.source==='运营补单'?'运营人员':'司机')],
      ['油费支付成功',o.time+' · 状态：'+o.status],
      ['分账成功',o.time+' · 操作人：系统']
    ]);
}
function liveFeeDetail(f){
  return liveHead(f.no,'关联加油订单 '+f.order+' · '+f.time+' · '+f.station,f.invoice,f.amount,'服务费金额')+
    liveSection('收付双方信息',[
      ['支付方',f.payer],['支付方名称',f.payerName],['服务费收款方','万联易达'],['支付状态',f.payment]
    ])+
    liveSection('关联订单信息',[
      ['发生时间',f.time],['关联加油订单',f.order],['关联客户',f.customer],['关联油站',f.station],
      ['加油金额',liveMoney(f.oilAmount)],['费率',f.rate],
      ['能源订单开票状态',f.energyInvoice],['能源发票申请单号',f.energyApply]
    ])+
    liveSection('发票基本信息',f.feeApply!=='—'?[
      ['申请单号',f.feeApply],['服务费开票状态',f.invoice],['开票方','万联易达'],['受票方',f.payerName],['税率','6%']
    ]:[['服务费开票状态',f.invoice],['发票信息','暂无发票信息']]);
}
function liveRefundDetail(r,audit){
  return liveHead(r.no,'原订单：'+r.order,r.status,r.amount,'退款金额')+
    liveSection('退款申请信息',[
      ['原订单号',r.order],['客户公司',r.customer],['司机',r.driver+' · '+r.phone],['车牌号',r.plate],
      ['油站',r.station],['退款类型','整单全额退款'],['商品本金',liveMoney(r.amount)],
      ['双方服务费影响',liveMoney(r.fee)],['申请原因',r.reason],['申请时间',r.time]
    ])+
    liveSection('资金与业务影响',[
      ['商品本金','油站原收款账户 → 客户原付款账户'],
      ['客户服务费','已支付则原路退回；未支付则取消应收'],
      ['油站服务费','已支付则原路退回；未支付则取消应收'],
      ['网货子单','全部子单冲销并恢复司机扣减/补贴'],
      ['核销','申请处理中暂停核销'],
      ['发票','禁止继续开票；已开票进入红冲/作废']
    ])+
    (audit?'<div class="card"><div class="card-b" style="display:flex;gap:8px;justify-content:flex-end"><button class="btn danger" onclick="liveModal(\'refundReject\',\''+r.no+'\')">拒绝退款</button><button class="btn primary" onclick="liveModal(\'refundApprove\',\''+r.no+'\')">通过并退款</button></div></div>':'');
}
function liveInvoiceInfo(a,fee){
  if(fee) return liveHead(a.no,'申请时间 '+a.time,a.status,a.amount,'申请金额')+
    liveSection('申请单信息',[
      ['开票方','万联易达'],['申请金额',liveMoney(a.amount)],['受票方',a.payerName],
      ['关联订单数',a.orders.length+' 笔'],['支付方类型',a.payer],['申请状态',a.status],['税率','6%']
    ])+liveSection('可用操作',[
      ['上传发票',a.status==='开票中'?'可操作':'不可操作'],
      ['下载发票',a.files.length?'可操作':'不可操作'],
      ['撤销申请',a.status==='开票中'?'可操作':'不可操作']
    ]);
  return liveHead(a.no,a.customer+' · 开票方 '+a.stationCo+' · '+a.energy+' · 申请时间 '+a.time,a.status,a.amount,'申请金额（含税）')+
    liveSection('申请单信息',[
      ['申请单号',a.no],['客户企业',a.customer],['申请金额（含税）',liveMoney(a.amount)],
      ['提交批次号',a.batch],['开票方（油站公司）',a.stationCo],['税率',a.rate],
      ['申请时间',a.time],['能源类型',a.energy],
      ['关联订单数 / 发票张数',a.orders.length+' 笔 / '+a.files.length+' 张'],['申请状态',a.status]
    ]);
}
function liveInvoiceOrders(a,fee){
  const rows=fee?a.orders.map(no=>{
    const f=LIVE.fees.find(x=>x.no===no);
    return f?'<tr><td class="mono">'+f.no+'</td><td class="mono">'+f.order+'</td><td>'+f.time+'</td><td class="num">'+money(f.oilAmount)+'</td><td>'+f.rate+'</td><td class="num">'+money(f.amount)+'</td></tr>':'';
  }):a.orders.map(no=>{
    const o=LIVE.orders.find(x=>x.no===no);
    return o?'<tr><td class="mono">'+o.no+'</td><td>'+o.time+'</td><td>'+o.goods+'</td><td>'+o.qty+'</td><td class="num">'+liveMoney(o.amount)+'</td></tr>':'';
  });
  return liveHead(a.no,'共 '+a.orders.length+' 笔关联订单',a.status,a.amount,'申请金额')+
    liveTable(fee?['服务费流水号','关联加油订单','发生时间','加油金额','费率','服务费金额']:['订单流水号','加油时间','商品','数量','金额（元）'],rows,fee?'1000px':'800px');
}
function liveInvoiceFiles(a){
  return liveHead(a.no,'发票文件',a.status,a.amount,'申请金额')+
    '<div class="card"><div class="card-h"><h2>发票文件</h2><span class="title-stat">共 '+a.files.length+' 张发票</span><span class="spacer"></span>'+(a.files.length?'<button class="btn sm" onclick="showToast(\'发票打包下载已开始\')">打包下载全部</button>':'')+'</div>'+
    (a.files.length?liveTable(['发票','操作'],a.files.map((name,i)=>'<tr><td>发票'+(i+1)+' · '+name+'</td><td class="acts"><button onclick="showToast(\'发票下载已开始\')">下载</button></td></tr>'),'650px'):'<div class="empty">暂无发票文件</div>')+'</div>';
}
function liveFeeFlowDetail(f){
  return liveHead(f.no,f.time+' · 订单号 '+f.order,f.type,f.amount,'变动金额')+
    liveSection('交易明细',[
      ['来源公司',f.company],['发生时间',f.time],['交易类型',f.type],['变动金额',(f.amount>0?'+':'')+money(f.amount)+' 元'],
      ['上次余额',money(f.before)+' 元'],['当前余额',money(f.after)+' 元'],['易宝流水号',f.no],
      ['订单号',f.order],['账户',f.account]
    ]);
}
function liveWithdrawDetail(w){
  return liveHead(w.no,w.company+' · 油站端申请',w.status,w.amount,'提现金额')+
    liveSection('提现信息',[
      ['提现账户',w.account],['账户类型 / 能源',w.accountName+' · '+w.energy],
      ['提现人',w.person+' · '+w.phone],['当前状态',w.status],['提现时间',w.time],
      ['完成时间',w.finish],['三方交易流水',w.third],['到账银行卡',w.bank+' · '+w.bankCard],
      ['开户支行','招商银行股份有限公司示例分行']
    ])+
    liveSection('处理进度',[
      ['提现申请已提交',w.time],['三方支付通道已受理','已受理'],
      [w.status,w.status==='提现成功'?w.finish:'通道返回失败']
    ]);
}
function liveBackfill(step){
  const stepTitle=['订单资料','支付确认','支付执行'][step];
  const intro='<div class="sumhead"><div class="no">撮合订单补单</div><div class="sec">订单资料 → 支付确认 → 支付执行</div><div class="pills">'+liveBadge(stepTitle)+'</div></div>';
  if(step===0) return intro+
    liveSection('订单时间与账户',[
      ['订单时间','<input class="inp" type="datetime-local" aria-label="订单时间">'],
      ['企业客户账户','<select class="inp" aria-label="企业客户账户"><option>请选择</option><option>示例物流有限公司</option></select>'],
      ['司机账户类型','<select class="inp" aria-label="司机账户类型"><option>自营账户</option><option>外请账户</option></select>'],
      ['补录司机','<select class="inp" aria-label="补录司机"><option>请选择司机</option><option>示例司机</option></select>']
    ])+
    liveSection('油站、商品与油机数据',[
      ['油站','<select class="inp" aria-label="油站"><option>请选择</option><option>示例柴油站</option></select>'],
      ['能源商品','<select class="inp" aria-label="能源商品"><option>请选择</option><option>-10#车用柴油</option></select>'],
      ['油站收款账户','选择油站后自动带出'],['企业成交单价','选择商品后自动带出'],
      ['油机价','选择商品后自动带出'],['油机录入方式','按油机金额'],
      ['油机金额','<input class="inp" type="number" min="0" step="0.01" placeholder="请输入油机金额" aria-label="油机金额">'],
      ['换算升数','按油机金额与油机价自动换算'],['油枪号','<input class="inp" placeholder="请输入油枪号" aria-label="油枪号">'],
      ['企业 / 司机实付','自动计算']
    ])+
    liveSection('履约资料',[
      ['车辆照片','<input type="file" accept=".png,.jpg,.jpeg" aria-label="车辆照片">'],
      ['油机照片','<input type="file" accept=".png,.jpg,.jpeg" aria-label="油机照片">'],
      ['格式与大小','PNG / JPG / JPEG，单张小于 5MB']
    ])+'<div class="card"><div class="card-b"><button class="btn primary" onclick="liveDrawer(\'backfill\',\'new\',1)">下一步</button></div></div>';
  return intro+liveSection(stepTitle,step===1?[
    ['订单资料','请核对补录时间、客户账户、司机、油站、油机金额与照片'],
    ['付款金额','由商品及油机数据自动计算，不在此步手动修改']
  ]:[['支付执行','提交后按核对结果发起支付与分账'],['执行结果','展示实际接口状态与失败原因']])+
    '<div class="card"><div class="card-b"><button class="btn" onclick="liveDrawer(\'backfill\',\'new\','+(step-1)+')">上一步</button> <button class="btn primary" onclick="'+(step===1?"liveDrawer('backfill','new',2)":"liveModal('backfillSubmit','new')")+'">'+(step===1?'下一步':'确认提交')+'</button></div></div>';
}
function liveDrawer(kind,key,tab=0){
  const map={order:LIVE.orders,fee:LIVE.fees,refund:LIVE.refunds,refundAudit:LIVE.refunds,energyInvoice:LIVE.energyInvoices,feeInvoice:LIVE.feeInvoices,feeFlow:LIVE.feeFlows,withdraw:LIVE.withdrawals};
  const row=map[kind]?.find(x=>(x.no||x.id)===key);
  const titles={order:'撮合订单详情',fee:'服务费详情',refund:'退款申请详情',refundAudit:'退款申请详情',energyInvoice:'发票详情',feeInvoice:'服务费发票管理详情',feeFlow:'服务费流水详情',withdraw:'提现记录详情',backfill:'撮合订单补单'};
  const tabs=kind==='order'?['订单信息','发票信息','退款信息','操作日志']:(kind==='energyInvoice'||kind==='feeInvoice')?['申请单信息','订单明细','发票文件']:kind==='backfill'?['订单资料','支付确认','支付执行']:[];
  const drawer=document.getElementById('drawer');
  const nav=document.getElementById('drawerNav'),main=document.getElementById('drawerMain');
  document.getElementById('drawerTitle').textContent=titles[kind];
  document.getElementById('drawerBody').classList.toggle('nonav',tabs.length===0);
  nav.innerHTML=tabs.map((label,i)=>'<button type="button" class="'+(i===tab?'on':'')+'" role="tab" aria-selected="'+(i===tab)+'" onclick="liveDrawer(\''+kind+'\',\''+key+'\','+i+')">'+drawerIcon(label)+'<span>'+label+'</span></button>').join('');
  main.innerHTML=kind==='order'?[liveOrderInfo,liveOrderInvoice,liveOrderRefund,liveOrderLogs][tab](row):
    kind==='fee'?liveFeeDetail(row):
    kind==='refund'||kind==='refundAudit'?liveRefundDetail(row,kind==='refundAudit'):
    kind==='energyInvoice'||kind==='feeInvoice'?[()=>liveInvoiceInfo(row,kind==='feeInvoice'),()=>liveInvoiceOrders(row,kind==='feeInvoice'),()=>liveInvoiceFiles(row)][tab]():
    kind==='feeFlow'?liveFeeFlowDetail(row):
    kind==='withdraw'?liveWithdrawDetail(row):
    liveBackfill(tab);
  showDrawer(true);
  if(drawer.classList.contains('on')) main.scrollTop=0;
}

function liveSelected(selector){
  return [...document.querySelectorAll(selector+':checked')].map(el=>el.value);
}
function liveModal(kind,key){
  const title=document.getElementById('modalTitle');
  const body=document.getElementById('modalBody');
  const foot=document.getElementById('modalFoot');
  let heading='',content='',primary='确认',requireField=false;
  const close='<button class="btn" type="button" data-mclose="1">取消</button>';
  const reason=(placeholder,min=0)=>'<div class="fi"><label for="live-modal-reason">操作原因 <span class="req">*</span></label><textarea id="live-modal-reason" class="inp" maxlength="200" minlength="'+min+'" placeholder="'+placeholder+'" aria-required="true"></textarea><span class="t2">'+(min?min+'–':'0–')+'200 字</span></div>';
  if(kind==='energyBatch'||kind==='feeBatch'){
    const fee=kind==='feeBatch';
    const nos=liveSelected(fee?'.live-fee-check':'.live-order-check');
    if(!nos.length){showToast('请先勾选可开票的'+(fee?'服务费':'能源')+'订单');return;}
    const records=nos.map(no=>(fee?LIVE.fees:LIVE.orders).find(x=>x.no===no)).filter(Boolean);
    const groups={};
    records.forEach(r=>{
      const g=fee?r.payerName+'|'+r.payer:r.stationCo+'|'+r.customer+'|'+r.energy;
      (groups[g]??=[]).push(r);
    });
    const list=Object.values(groups);
    const total=records.reduce((sum,r)=>sum+(fee?r.amount:r.amount),0);
    heading=fee?'批量申请开具服务费发票':'批量申请开具能源发票';
    content='<p>已选择 <b>'+records.length+'</b> 笔订单，拆分为 <b>'+list.length+'</b> 个开票申请单。</p>'+
      '<div class="sumhead"><div class="money"><div class="oilv"><div class="l">申请金额合计</div><div class="v num">'+liveMoney(total)+'</div></div><div><div class="l">申请单数</div><div class="v">'+list.length+'</div></div><div><div class="l">订单数</div><div class="v">'+records.length+'</div></div></div></div>'+
      liveTable(fee?['序号','开票方','受票方','发票金额(元)','关联笔数']:['序号','开票方（油站公司）','受票方','能源类型','申请金额(元)','关联笔数'],
        list.map((group,i)=>'<tr><td>'+(i+1)+'</td><td>'+(fee?'万联易达':group[0].stationCo)+'</td><td>'+(fee?group[0].payerName:group[0].customer)+'</td>'+(fee?'':'<td>'+group[0].energy+'</td>')+'<td class="num">'+money(group.reduce((sum,r)=>sum+r.amount,0))+'</td><td class="num">'+group.length+'</td></tr>'),'800px');
    primary='提交 '+list.length+' 个申请单';
  }else if(kind==='refundApply'){
    const o=LIVE.orders.find(x=>x.no===key);
    if(!o?.refundable){showToast('当前订单不符合整单退款申请条件');return;}
    heading='确认提交整单退款申请';
    content='<p>提交后将暂停核销并进入平台审核；商品本金、全部网货子单和双方服务费按原订单快照完整反向。</p>'+
      liveSection('申请对象',[['能源订单号',o.no],['商品本金',liveMoney(o.amount)],['双方服务费影响',liveMoney(o.customerFee+o.stationFee)]])+
      reason('请输入操作原因');
    primary='确认提交';requireField=true;
  }else if(kind==='refundReject'||kind==='refundApprove'){
    const r=LIVE.refunds.find(x=>x.no===key);
    heading=kind==='refundReject'?'确认拒绝退款申请':'确认通过并退款';
    content='<p>退款申请 '+r.no+' · 原订单 '+r.order+' · '+liveMoney(r.amount)+'</p>'+
      '<p class="note">'+(kind==='refundReject'?'拒绝后订单恢复原待核销状态，司机可查看拒绝原因。':'通过后将发起原路退款并冲销相关子单及服务费。')+'</p>'+
      reason('请输入5–200字操作原因',5);
    primary=kind==='refundReject'?'确认拒绝':'通过并退款';requireField=true;
  }else if(kind==='energyUpload'||kind==='feeUpload'){
    const fee=kind==='feeUpload';
    const a=(fee?LIVE.feeInvoices:LIVE.energyInvoices).find(x=>x.no===key);
    if(a?.status!=='开票中'){showToast('只有开票中的申请单可上传发票');return;}
    heading=fee?'服务费发票':'能源发票';
    content='<p>将为申请单 <b class="mono">'+a.no+'</b> 上传 '+heading+'，上传后申请状态变为「已开票」。</p>'+
      liveSection('核对信息',[
        ['开票金额',liveMoney(a.amount)],['税率',fee?'6%':a.rate],['申请单号',a.no],
        ['开票方',fee?'万联易达':a.stationCo],['受票方',fee?a.payerName:a.customer],
        ...(fee?[]:[['能源类型',a.energy]])
      ])+
      '<div class="fi"><label for="live-invoice-file">发票文件 <span class="req">*</span></label><input id="live-invoice-file" class="inp" type="file" accept=".pdf,.jpg,.jpeg,.png"><span class="t2">请上传 .pdf/.jpg/.jpeg/.png 格式，小于 10MB 的文件</span></div>';
    primary='确认上传';requireField=true;
  }else if(kind==='energyCancel'||kind==='feeCancel'){
    const a=(kind==='feeCancel'?LIVE.feeInvoices:LIVE.energyInvoices).find(x=>x.no===key);
    if(a?.status!=='开票中'){showToast('只有开票中的申请单可撤销');return;}
    heading='撤销申请';
    content='<p>确认撤销申请单 <b class="mono">'+a.no+'</b>？撤销后关联订单可重新申请开票。</p>'+reason('请输入撤销原因');
    primary='确认撤销';requireField=true;
  }else if(kind==='energyDownload'||kind==='feeDownload'){
    const nos=liveSelected(kind==='feeDownload'?'.live-fee-invoice-check':'.live-energy-invoice-check');
    if(!nos.length){showToast('请先勾选已开票的申请单');return;}
    heading='批量下载发票';
    content='<p>将打包下载所选的 <b>'+nos.length+'</b> 笔申请单对应的发票文件。</p>'+
      liveTable(['申请单号'],nos.map(no=>'<tr><td class="mono">'+no+'</td></tr>'),'400px');
    primary='开始下载';
  }else if(kind==='backfillSubmit'){
    heading='确认提交撮合订单补单';
    content='<p>请核对订单资料和支付金额。提交后会进入支付执行。</p>';
    primary='确认提交';
  }
  title.textContent=heading;
  body.innerHTML=content;
  foot.innerHTML=close+'<button class="btn primary" type="button" onclick="liveFinish(\''+kind+'\',\''+(key||'')+'\','+requireField+')">'+primary+'</button>';
  document.querySelector('#modal .modal-card').classList.toggle('sm',!['energyBatch','feeBatch'].includes(kind));
  modal.classList.add('on');
  requestAnimationFrame(()=>{const el=body.querySelector('textarea,input');(el||foot.querySelector('button'))?.focus();});
}
function liveFinish(kind,key,requireField){
  if(requireField){
    const reason=document.getElementById('live-modal-reason');
    if(reason && (!reason.value.trim() || (reason.minLength>0&&reason.value.trim().length<reason.minLength))){reason.focus();showToast('请填写符合字数要求的操作原因');return;}
    const file=document.getElementById('live-invoice-file');
    if(file){
      const selected=file.files?.[0];
      if(!selected){file.focus();showToast('请选择发票文件');return;}
      if(selected.size>=10*1024*1024){file.focus();showToast('发票文件需小于 10MB');return;}
    }
  }
  modal.classList.remove('on');
  showToast('原型演示：'+(kind.includes('Download')?'下载任务已提交':'操作已确认'));
}

/* 覆盖已渲染的旧版默认首页。旧版企业端日/月账单继续使用原有实现。 */
go('orders');
