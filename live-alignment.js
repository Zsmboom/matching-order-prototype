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
    {no:'MH20260928110900000007',time:'2026-09-28 11:09:33',source:'正常下单',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例天然气站',stationCo:'示例能源有限公司',energy:'天然气',goods:'LNG',qty:'0.02 kg',nozzle:'01',machinePrice:'5.00',enterprisePrice:'5.00',machineAmount:0.10,amount:0.10,payment:'一键支付无核销',status:'审核通过',verify:'无需核销',invoice:'未开票',customerFee:0,stationFee:0.01,feeState:'已退',apply:'—',refundable:false},
    {no:'MH20260920104200000008',time:'2026-09-20 10:42:35',source:'正常下单',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例柴油站',stationCo:'示例能源有限公司',energy:'柴油',goods:'-10#车用柴油',qty:'0.05 L',nozzle:'03',machinePrice:'8.00',enterprisePrice:'8.00',machineAmount:0.40,amount:0.40,payment:'一键支付无核销',status:'支付成功',verify:'无需核销',invoice:'已撤销',customerFee:0,stationFee:0.06,feeState:'已收',apply:'—',refundable:false},
    /* ---- 乐企开票演示单：开票渠道=乐企（易宝支付 + 平台自营站柴油，支付成功即自动开票） ---- */
    {no:'MH20260827094500000001',time:'2026-08-27 09:45:18',source:'正常下单',customer:'万联易达物流科技有限公司',driver:'田玲玲',phone:'157****7832',plate:'辽AEK808',station:'沈阳浑南加油站',stationCo:'中石化辽宁石油分公司',energy:'柴油',goods:'0# 轻柴油',qty:'118.30 L',nozzle:'01',machinePrice:'6.72',enterprisePrice:'6.72',machineAmount:795.02,amount:795.02,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'开票成功',customerFee:0,stationFee:9.54,feeState:'已收',apply:'—',refundable:true,invCh:'乐企'},
    {no:'MH20260827093200000002',time:'2026-08-27 09:32:10',source:'正常下单',customer:'蒙晋通达运输有限公司',driver:'宿红',phone:'183****0002',plate:'蒙T9U81U',station:'沈阳浑南加油站',stationCo:'中石化辽宁石油分公司',energy:'柴油',goods:'-10# 柴油',qty:'86.20 L',nozzle:'02',machinePrice:'6.85',enterprisePrice:'6.85',machineAmount:590.46,amount:590.46,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'开票中',customerFee:0,stationFee:7.09,feeState:'已收',apply:'—',refundable:true,invCh:'乐企'},
    {no:'MH20260827091800000003',time:'2026-08-27 09:18:44',source:'正常下单',customer:'测试客户2',driver:'李强',phone:'178****5328',plate:'京A1234Q',station:'天津武清京津站',stationCo:'中石油天津销售分公司',energy:'柴油',goods:'0# 轻柴油',qty:'96.50 L',nozzle:'03',machinePrice:'6.66',enterprisePrice:'6.66',machineAmount:642.69,amount:642.69,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'已红冲',customerFee:0,stationFee:7.71,feeState:'已收',apply:'—',refundable:false,invCh:'乐企',invFail:'购方税号与客户认证信息不一致'},
    {no:'MH20260826175200000004',time:'2026-08-26 17:52:30',source:'正常下单',customer:'测试客户2',driver:'李强',phone:'178****5328',plate:'京A1234Q',station:'沈阳浑南加油站',stationCo:'中石化辽宁石油分公司',energy:'柴油',goods:'0# 轻柴油',qty:'183.04 L',nozzle:'04',machinePrice:'6.72',enterprisePrice:'6.72',machineAmount:1230.00,amount:1230.00,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'红冲中',customerFee:0,stationFee:14.76,feeState:'已收',apply:'—',refundable:true,invCh:'乐企'},
    {no:'MH20260826164000000005',time:'2026-08-26 16:40:01',source:'正常下单',customer:'蒙晋通达运输有限公司',driver:'孙倩',phone:'150****3311',plate:'蒙A2288L',station:'天津武清京津站',stationCo:'中石油天津销售分公司',energy:'柴油',goods:'-10# 柴油',qty:'210.50 L',nozzle:'01',machinePrice:'6.85',enterprisePrice:'6.85',machineAmount:1441.93,amount:1441.93,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'已红冲',customerFee:0,stationFee:17.30,feeState:'已收',apply:'—',refundable:false,invCh:'乐企'},
    {no:'MH2026082516100000005A',time:'2026-08-25 16:10:42',source:'正常下单',customer:'万联易达物流科技有限公司',driver:'赵德明',phone:'135****0098',plate:'津B7788Z',station:'天津武清京津站',stationCo:'中石油天津销售分公司',energy:'柴油',goods:'0# 轻柴油',qty:'88.60 L',nozzle:'06',machinePrice:'6.66',enterprisePrice:'6.66',machineAmount:590.08,amount:590.08,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'红冲失败',customerFee:0,stationFee:7.08,feeState:'已收',apply:'—',refundable:false,invCh:'乐企',invFail:'乐企红冲接口返回：购方已认证抵扣，需线下沟通抵扣处理'},
    {no:'MH20260826150800000006',time:'2026-08-26 15:08:26',source:'正常下单',customer:'万联易达物流科技有限公司',driver:'赵德明',phone:'135****0098',plate:'津B7788Z',station:'天津武清京津站',stationCo:'中石油天津销售分公司',energy:'柴油',goods:'0# 轻柴油',qty:'96.50 L',nozzle:'02',machinePrice:'6.66',enterprisePrice:'6.66',machineAmount:642.69,amount:642.69,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'开票成功',customerFee:0,stationFee:7.71,feeState:'已收',apply:'—',refundable:true,invCh:'乐企'},
    {no:'MH20260827102200000007',time:'2026-08-27 10:22:09',source:'正常下单',customer:'万联易达物流科技有限公司',driver:'田玲玲',phone:'157****7832',plate:'辽AEK808',station:'沈阳浑南加油站',stationCo:'中石化辽宁石油分公司',energy:'柴油',goods:'0# 轻柴油',qty:'52.10 L',nozzle:'05',machinePrice:'6.72',enterprisePrice:'6.72',machineAmount:350.11,amount:350.11,payment:'易宝支付',status:'支付成功',verify:'已核销',invoice:'未开票',customerFee:0,stationFee:4.20,feeState:'已收',apply:'—',refundable:false,invCh:'乐企'},
    /* 退款中且开票失败：不展示手动开票、停止失败自动重试（同时该单仍计入网点公司熔断计数） */
    {no:'MH20260828103000000009',time:'2026-08-28 10:30:05',source:'正常下单',customer:'万联易达物流科技有限公司',driver:'田玲玲',phone:'157****7832',plate:'辽AEK808',station:'沈阳浑南加油站',stationCo:'中石化辽宁石油分公司',energy:'柴油',goods:'0# 轻柴油',qty:'95.60 L',nozzle:'08',machinePrice:'6.72',enterprisePrice:'6.72',machineAmount:642.30,amount:642.30,payment:'易宝支付',status:'退款中',verify:'已核销',invoice:'已红冲',customerFee:0,stationFee:7.71,feeState:'已收',apply:'—',refundable:false,invCh:'乐企'},
    {no:'MH2026082709550000000B',time:'2026-08-27 09:55:11',source:'正常下单',customer:'万联易达物流科技有限公司',driver:'田玲玲',phone:'157****7832',plate:'辽AEK808',station:'沈阳浑南加油站',stationCo:'中石化辽宁石油分公司',energy:'柴油',goods:'0# 轻柴油',qty:'64.20 L',nozzle:'07',machinePrice:'6.72',enterprisePrice:'6.72',machineAmount:431.42,amount:431.42,payment:'易宝支付',status:'退款中',verify:'已核销',invoice:'开票失败',customerFee:0,stationFee:5.18,feeState:'已收',apply:'—',refundable:false,invCh:'乐企',invFail:'票池可开剩余不足，未开具'}
  ],
  fees:[
    {no:'2109000000000000001',third:'PT1026092815000000010000004',order:'MH20260922140500000001',time:'2026-09-22 14:05:49',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.09,oilAmount:0.60,rate:'15.05%',payment:'已收',invoice:'开票中',energyInvoice:'已开票',energyApply:'KP2100000000000000001',feeApply:'FZK2100000000000000001'},
    {no:'2109000000000000002',third:'PT1026092214000000010000002',order:'MH20260922140800000002',time:'2026-09-22 14:08:51',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.14,oilAmount:0.90,rate:'15.05%',payment:'已收',invoice:'开票中',energyInvoice:'已开票',energyApply:'KP2100000000000000001',feeApply:'FZK2100000000000000001'},
    {no:'2109000000000000003',third:'PT1026092214000000010000003',order:'MH20260922142200000003',time:'2026-09-22 14:22:17',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.08,oilAmount:0.50,rate:'15.05%',payment:'已收',invoice:'开票中',energyInvoice:'已开票',energyApply:'KP2100000000000000001',feeApply:'FZK2100000000000000001'},
    {no:'2109000000000000004',third:'RF1026092811000000010000001',order:'MH20260928110900000007',time:'2026-09-28 11:16:51',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例天然气站',amount:-0.01,oilAmount:0.10,rate:'10.00%',payment:'已收',invoice:'未开票',energyInvoice:'未开票',energyApply:'—',feeApply:'—'},
    {no:'2109000000000000005',third:'PT1026092214000000010000001',order:'MH20260928150700000006',time:'2026-09-28 15:07:30',payer:'油站',payerName:'示例能源有限公司',customer:'示例运输有限公司',station:'示例柴油站',amount:0.01,oilAmount:0.10,rate:'10.00%',payment:'已收',invoice:'未开票',energyInvoice:'未开票',energyApply:'—',feeApply:'—'},
    {no:'2109000000000000006',third:'PT1026092213000000010000005',order:'MH20260922132900000004',time:'2026-09-22 13:29:01',payer:'油站',payerName:'示例能源有限公司',customer:'示例运输有限公司',station:'示例天然气站',amount:0.05,oilAmount:0.50,rate:'10.00%',payment:'已收',invoice:'已开票',energyInvoice:'开票中',energyApply:'KP2100000000000000002',feeApply:'FZK2100000000000000002'},
    {no:'2109000000000000007',third:'PT1026092213000000010000006',order:'MH20260922132900000004',time:'2026-09-22 13:29:01',payer:'客户',payerName:'示例运输有限公司',customer:'示例运输有限公司',station:'示例天然气站',amount:0.03,oilAmount:0.50,rate:'6.00%',payment:'已收',invoice:'开票中',energyInvoice:'开票中',energyApply:'KP2100000000000000002',feeApply:'FZK2100000000000000004'},
    {no:'2109000000000000008',third:'PT1026092010420000010000008',order:'MH20260920104200000008',time:'2026-09-20 10:42:38',payer:'油站',payerName:'示例能源有限公司',customer:'示例物流有限公司',station:'示例柴油站',amount:0.06,oilAmount:0.40,rate:'15.05%',payment:'已收',invoice:'已撤销',energyInvoice:'已撤销',energyApply:'—',feeApply:'—'}
  ],
  refunds:[
    {no:'MHRF202609241342000001',order:'MH20260923200500000005',customer:'示例运输有限公司',driver:'赵师傅',phone:'198****6650',plate:'京A66778',station:'示例一键支付站',amount:0.10,fee:0,reason:'现场申请整单退款',source:'运营补单',status:'待审核',time:'2026-09-24 13:42:03'},
    {no:'MHRF202609281116000002',order:'MH20260928110900000007',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例天然气站',amount:0.10,fee:0.01,reason:'重复下单',source:'正常下单',status:'退款成功',time:'2026-09-28 11:16:27',auditBy:'张世民（运营中台）',auditAt:'2026-09-28 11:16:40'},
    /* ---- 乐企开票订单的退款演示单：redResult 预置本次演示的红冲结果（红冲触发=退款审核通过先红冲后退款） ---- */
    {no:'MHRF202608271012000003',order:'MH20260827094500000001',customer:'万联易达物流有限公司',driver:'田玲玲',phone:'157****7832',plate:'辽AEK808',station:'沈阳浑南加油站',amount:795.02,fee:9.54,reason:'司机加错油品，整单退款',source:'正常下单',status:'待审核',time:'2026-08-27 10:12:00',invCh:'乐企',redResult:'红冲成功',inv:'开票成功 · 未红冲'},
    {no:'MHRF202608271040000004',order:'MH20260826150800000006',customer:'万联易达物流有限公司',driver:'赵德明',phone:'135****0098',plate:'津B7788Z',station:'天津武清京津站',amount:642.69,fee:7.71,reason:'油品质量争议，客户要求退款',source:'运营补单',status:'退款失败',time:'2026-08-27 10:40:00',invCh:'乐企',redResult:'红冲失败',redFail:'乐企红冲接口返回：购方已认证抵扣，需线下沟通抵扣处理完成后重新发起退款申请',inv:'开票成功 · 未红冲'},
    {no:'MHRF202608271102000005',order:'MH20260826175200000004',customer:'测试客户2',driver:'李强',phone:'178****5328',plate:'京A1234Q',station:'沈阳浑南加油站',amount:1230.00,fee:14.76,reason:'重复支付',source:'正常下单',status:'退款中',time:'2026-08-27 11:02:00',invCh:'乐企',inv:'红冲中',auditBy:'张世民（运营中台）',auditAt:'2026-08-27 11:04:35'},
    {no:'MHRF202608271150000008',order:'MH20260827105500000003',customer:'万联易达物流有限公司',driver:'周慧敏',phone:'138****2210',plate:'津BQ7712',station:'天津武清京津站',amount:590.46,fee:7.09,reason:'实际未加注，油枪跳枪异常',source:'正常下单',status:'退款中',time:'2026-08-27 11:50:00',invCh:'乐企',inv:'红冲中',auditBy:'张世民（运营中台）',auditAt:'2026-08-27 11:52:10'},
    {no:'MHRF202608271320000009',order:'MH20260827091800000003',customer:'测试客户2',driver:'李强',phone:'178****5328',plate:'京A1234Q',station:'沈阳浑南加油站',amount:812.30,fee:9.75,reason:'重复支付，整单退回',source:'正常下单',status:'退款成功',time:'2026-08-27 13:20:00',invCh:'乐企',inv:'已红冲',auditBy:'张世民（运营中台）',auditAt:'2026-08-27 13:22:05'},
    /* 已驳回：审核不通过，退款单终止 */
    {no:'MHRF202608281030000006',order:'MH20260922140500000001',customer:'示例物流有限公司',driver:'王师傅',phone:'188****0008',plate:'京A11111',station:'示例柴油站',amount:0.60,fee:0.09,reason:'客户反馈重复扣款，经核实为两次独立加注',source:'正常下单',status:'已驳回',time:'2026-08-28 10:30:12',auditBy:'张世民（运营中台）',auditAt:'2026-08-28 10:46:30',rejectNote:'核实为两笔独立加注订单，不予退款'},
    /* 退款失败（资金流退回失败）：红冲已成功，需重新发起退款，审核通过时红冲自动通过、直接走易宝资金流退款 */
    {no:'MHRF202608281045000007',order:'MH20260828103000000009',customer:'万联易达物流科技有限公司',driver:'田玲玲',phone:'157****7832',plate:'辽AEK808',station:'沈阳浑南加油站',amount:642.30,fee:7.71,reason:'油品质量争议，整单退款',source:'正常下单',status:'退款失败',time:'2026-08-28 10:45:03',invCh:'乐企',inv:'已红冲',auditBy:'张世民（运营中台）',auditAt:'2026-08-28 10:46:12',fundFail:'易宝退款失败：油站收款账户状态异常'}
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
  orders:[['订单编号','no','text','总单号/子单号'],['订单来源','source','select',['正常下单','运营补单']],['客户公司','customer','text','消费公司/付款公司'],['司机信息','driver','text','姓名/手机号'],['油站名称','station','text','油站公司/网点'],['支付方式','payment','select',['一键支付无核销','易宝支付']],['订单状态','status','select',['支付成功','退款成功','支付失败']],['开票渠道','invCh','select',['乐企','线下']],['乐企开票状态','invoiceLq','select',['未开票','开票中','开票失败','开票成功','红冲中','红冲失败','已红冲']],['开票状态','invoice','select',['未开票','开票中','已开票','已撤销']],['时间范围','time','range','']],
  fee:[['服务费流水号','no','text','输入服务费流水号'],['关联订单号','order','text','输入能源订单号'],['出账周期','time','month',''],['支付状态','payment','select',['已收','待收']],['服务费开票状态','invoice','select',['未开票','开票中','已开票','已撤销']],['支付方','payerName','text','输入支付方名称'],['油站','station','text','输入油站名称'],['能源发票申请单号','energyApply','text','KP 开头'],['能源订单开票状态','energyInvoice','select',['未开票','开票中','已开票','已撤销']]],
  refund:[['退款编号','no','text','输入退款编号'],['原订单号','order','text','输入撮合总单号'],['客户公司','customer','text','输入客户公司'],['油站名称','station','text','输入油站名称'],['退款状态','status','select',['待审核','退款中','退款成功','已驳回','退款失败']],['申请时间','time','range','']],
  energyInvApply:[['开票日期','time','range',''],['发票状态','status','select',['开票中','已开票','已撤销']],['申请单号','no','text','KP 开头，字母数字'],['提交批次号','batch','text','BAT 开头，字母数字'],['油站公司','stationCo','text','输入油站公司'],['能源类型','energy','select',['柴油','天然气','尿素']],['申请金额','amount','amountRange','']],
  feeInvApply:[['申请单号','no','text','FZK 开头，字母数字'],['申请时间','time','range',''],['申请状态','status','select',['开票中','已开票','已撤销']],['支付方','payer','select',['油站承担','企业承担']],['申请金额','amount','amountRange',''],['支付方名称','payerName','text','油站公司或客户企业']],
  serviceFee:[['交易类型','type','select',['客户费入账','油站费入账','客户费退款','油站费退款','提现']],['来源公司','company','text','输入公司名称关键词'],['易宝流水号','no','text','输入易宝流水号'],['订单号','order','text','输入订单号'],['发生时间','time','range','']],
  withdrawRecord:[['提现单号','no','text','输入提现单号'],['网点公司','company','select',['示例能源有限公司']],['账户名称','accountName','text','输入账户名称'],['账号','account','text','输入账号'],['能源类型','energy','select',['柴油','天然气','尿素']],['提现状态','status','select',['提现成功','提现失败','处理中']],['提现时间','time','range','']],
  /* 4PL 端 · 充电订单管理 */
  chargeOrders:[['订单状态','status','select',['充电中','充电结束','待支付','已支付','已退款']],['司机姓名','driver','text','输入司机姓名'],['手机号','phone','text','输入手机号'],['车牌号','plate','text','输入车牌号'],['关联运单号','waybill','text','输入运单号'],['能源订单号','no','text','输入能源订单号'],['云快充订单号','ckcNo','text','输入云快充订单号'],['是否追回','recover','select',['未追回','已追回','恢复正常支付']],['创建时间','createTime','range','']],
  /* 4PL 端 · 司机能源管理 / 能源账户管理 / 变更日志 */
  driverOil:[['司机姓名','name','text','输入司机姓名'],['司机手机号','phone','text','输入手机号']],
  oilAccount:[['网货主体名称','subj','text','输入主体名称'],['能源类型','etype','select',['油气','电']]],
  driverOilLog:[['操作时间','time','range',''],['能源类型','energy','select',['油气','电']],['变更类型','type','select',['分配','加注','圈回','订单取消','恢复','分电','冻结','解冻','实扣','回收','手动分配']],['运单号','wb','text','输入运单号'],['能源订单号','order','text','输入能源订单号']],
  /* 4PL 端 · 能源运单管理 / 能源规则配置 / 司机补贴规则配置 / 货主能源返利配置 */
  driverWaybills:[['运单号','wb','text','输入运单号'],['车牌号','plate','text','输入车牌号'],['司机姓名','driver','text','输入司机姓名'],['司机手机号','phone','text','输入手机号'],['网络货运主体','whSubj','text','输入主体名称'],['客户名称','customer','text','输入客户名称'],['运单状态','status','select',['装货/在途','已卸货','已取消','取消装货/在途','取消-待支付','取消-已卸货']],['派发状态','splitStatus','select',['未派发','已派发','已回收']],['运单预审状态','audit','select',['未申请','待审核','审核不通过','审核通过','待处理','已保存','转结算','待预审','预审不通过']],['车辆能源类型','etype','select',['柴油','天然气','电','油']],['能源类型','energy','select',['油气','电']],['派发时间','splitTime','range',''],['运单创建时间','createTime','range','']],
  oilRules:[['规则名称','name','text','输入规则名称'],['适用网货主体','subj','text','输入主体名称'],['货主企业','owner','text','输入货主企业'],['能源类型','etype','select',['油气','电']],['状态','status','select',['启用','停用']],['派发节点','grantNode','select',['装车','货主结算后（一笔付）']],['回收节点','recycleNode','select',['卸货后','卸货后结算前','货主结算后N天']],['规则时间范围','range','range','']],
  wljRules:[['网货主体','subj','text','输入主体名称'],['货主企业','owner','text','输入货主企业'],['状态','status','select',['正常','停用']]],
  ownerRebates:[['货主企业','owner','text','输入货主企业'],['网货主体','subj','text','输入主体名称'],['返利规则','rule','select',['按能源额度','按费率']],['状态','status','select',['启用','停用']],['规则时间范围','range','range','']]
};
const liveQuery = {};
/* 4PL 端 · 充电订单演示数据（17 条：订单状态 6 值全覆盖、是否追回 3 值全覆盖；金额自洽 实付=万联价×充电量、补贴=订单金额−实付） */
LIVE.chargeOrders = [
 {no:'CD20261028000001', ckcNo:'CKC202610280915001', waybill:'W20261028000011', driver:'王建国', phone:'138****4021', plate:'辽A·D81K2', status:'充电中', operator:'特来电', station:'特来电·万联物流园充电站', pile:'A03-01枪', startSoc:32, endSoc:'', startTime:'2026-10-28 09:15:00', endTime:'', kwh:36.4, orderAmt:60.98, wlj:1.20, payAmt:43.68, subsidy:17.30, deduct:'未扣减', frozen:520.00, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '未通过', recover:'未追回', fake:'否', createTime:'2026-10-28 09:10:22', syncTime:'2026-10-28 09:15:03', stationAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区', locAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区 充电站入口东侧', locType:'GPS', locTime:'2026-10-28 09:15:00', distKm:'0.06', shipper:'沈阳长鑫冷链物流有限公司', goods:'冷链产品', weight:'28.50', fromAddr:'沈阳市于洪区沈大路 88 号', toAddr:'长春市绿园区青冈路 45 号', loadTime:'2026-10-28 07:32:10', unloadTime:'', freightAmt:'4,180.00'},
 {no:'CD20261028000002', ckcNo:'CKC202610281032002', waybill:'W20261028000012', driver:'刘志强', phone:'139****8834', plate:'辽A·F52R9', status:'充电中', operator:'星星充电', station:'星星充电·沈北新区枢纽站', pile:'B12-02枪', startSoc:41, endSoc:'', startTime:'2026-10-28 10:32:00', endTime:'', kwh:12.8, orderAmt:21.40, wlj:1.15, payAmt:14.72, subsidy:6.68, deduct:'未扣减', frozen:356.00, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '未通过', recover:'未追回', fake:'否', createTime:'2026-10-28 10:28:07', syncTime:'2026-10-28 10:32:04', stationAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧', locAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧 3 号桩区', locType:'GPS', locTime:'2026-10-28 10:32:00', distKm:'0.03', shipper:'沈阳鲜达供应链有限公司', goods:'生鲜冻品', weight:'16.20', fromAddr:'沈阳市大东区东望街 20 号', toAddr:'哈尔滨市香坊区电碳路 18 号', loadTime:'2026-10-28 08:15:44', unloadTime:'', freightAmt:'3,260.00'},
 {no:'CD20261027000003', ckcNo:'CKC202610271846003', waybill:'W20261027000008', driver:'赵德海', phone:'137****2260', plate:'辽A·G19P6', status:'充电结束', operator:'特来电', station:'特来电·万联物流园充电站', pile:'A01-01枪', startSoc:28, endSoc:86, startTime:'2026-10-27 18:46:00', endTime:'2026-10-27 20:12:00', kwh:52.3, orderAmt:87.61, wlj:1.20, payAmt:62.76, subsidy:24.85, deduct:'已扣减', frozen:0, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-27 18:40:11', syncTime:'2026-10-27 20:13:26', stationAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区', locAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区 充电站入口东侧', locType:'GPS', locTime:'2026-10-27 18:46:00', distKm:'0.06', shipper:'沈阳长鑫冷链物流有限公司', goods:'冷链产品', weight:'28.50', fromAddr:'长春市绿园区青冈路 45 号', toAddr:'沈阳市于洪区沈大路 88 号', loadTime:'2026-10-27 09:20:33', unloadTime:'2026-10-27 21:48:02', freightAmt:'4,180.00'},
 {no:'CD20261027000004', ckcNo:'CKC202610271509004', waybill:'W20261027000007', driver:'孙国庆', phone:'136****7712', plate:'辽A·H73T4', status:'充电结束', operator:'小桔充电', station:'小桔充电·铁西工业路站', pile:'C05-01枪', startSoc:55, endSoc:92, startTime:'2026-10-27 15:09:00', endTime:'2026-10-27 16:02:00', kwh:30.6, orderAmt:51.30, wlj:1.18, payAmt:36.11, subsidy:15.19, deduct:'已扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-27 15:02:44', syncTime:'2026-10-27 16:03:19', stationAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场', locAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场 5 号桩区', locType:'GPS', locTime:'2026-10-27 15:09:00', distKm:'0.08', shipper:'铁岭恒通货运有限公司', goods:'普通货物', weight:'22.00', fromAddr:'铁岭市银州区广裕街 135 号', toAddr:'沈阳市铁西区开发大路 66 号', loadTime:'2026-10-27 08:05:17', unloadTime:'2026-10-27 18:22:40', freightAmt:'3,050.00'},
 {no:'CD20261027000005', ckcNo:'CKC202610271120005', waybill:'W20261027000006', driver:'李长顺', phone:'135****3391', plate:'辽A·J26M8', status:'待支付', operator:'星星充电', station:'星星充电·沈北新区枢纽站', pile:'B03-03枪', startSoc:19, endSoc:64, startTime:'2026-10-27 11:20:00', endTime:'2026-10-27 12:35:00', kwh:44.1, orderAmt:73.86, wlj:1.20, payAmt:52.92, subsidy:20.94, deduct:'未扣减', frozen:486.00, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '未通过', recover:'未追回', fake:'否', createTime:'2026-10-27 11:14:38', syncTime:'2026-10-27 12:36:02', stationAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧', locAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧 3 号桩区', locType:'GPS', locTime:'2026-10-27 11:20:00', distKm:'0.03', shipper:'沈阳鲜达供应链有限公司', goods:'生鲜冻品', weight:'16.20', fromAddr:'沈阳市大东区东望街 20 号', toAddr:'哈尔滨市香坊区电碳路 18 号', loadTime:'2026-10-27 06:48:29', unloadTime:'', freightAmt:'3,260.00'},
 {no:'CD20261026000006', ckcNo:'CKC202610262001006', waybill:'W20261026000005', driver:'马春林', phone:'134****5527', plate:'辽A·K84V3', status:'已支付', operator:'特来电', station:'特来电·浑南产业新城站', pile:'A08-02枪', startSoc:36, endSoc:79, startTime:'2026-10-26 20:01:00', endTime:'2026-10-26 21:18:00', kwh:23.4, orderAmt:39.04, wlj:1.20, payAmt:28.08, subsidy:10.96, deduct:'已扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '无异常', abnTime: '—', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-26 19:55:26', syncTime:'2026-10-26 21:19:07', stationAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼', locAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼北侧', locType:'基站', locTime:'2026-10-26 20:01:00', distKm:'0.15', thawList:[{no:'W20261026000015',amt:'186.40'},{no:'W20261026000016',amt:'110.32'},{no:'W20261026000017',amt:'87.60'}], shipper:'盘锦禹王粮油物流部', goods:'粮油制品', weight:'30.80', fromAddr:'盘锦市双台子区中华北路 52 号', toAddr:'沈阳市皇姑区黄河北大街 96 号', loadTime:'2026-10-26 12:10:05', unloadTime:'', freightAmt:'2,890.00'},
 {no:'CD20261026000013', ckcNo:'CKC202610262001006', waybill:'W20261026000014', driver:'马春林', phone:'134****5527', plate:'辽A·K84V3', status:'已支付', operator:'特来电', station:'特来电·浑南产业新城站', pile:'A08-02枪', startSoc:36, endSoc:79, startTime:'2026-10-26 20:01:00', endTime:'2026-10-26 21:18:00', kwh:15.5, orderAmt:26.03, wlj:1.20, payAmt:18.60, subsidy:7.43, deduct:'部分扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '无异常', abnTime: '—', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-26 19:55:26', syncTime:'2026-10-26 21:19:07', stationAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼', locAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼北侧', locType:'GPS', locTime:'2026-10-26 20:01:00', distKm:'0.15', thawList:[{no:'W20261026000015',amt:'186.40'},{no:'W20261026000016',amt:'110.32'},{no:'W20261026000017',amt:'87.60'}], shipper:'沈阳鲜达供应链有限公司', goods:'生鲜冻品', weight:'16.20', fromAddr:'沈阳市大东区东望街 20 号', toAddr:'哈尔滨市香坊区电碳路 18 号', loadTime:'2026-10-26 12:10:05', unloadTime:'', freightAmt:'3,260.00'},
 {no:'CD20261026000007', ckcNo:'CKC202610260947007', waybill:'W20261026000004', driver:'周永康', phone:'133****9903', plate:'辽A·L37N5', status:'已支付', operator:'小桔充电', station:'小桔充电·铁西工业路站', pile:'C02-01枪', startSoc:22, endSoc:88, startTime:'2026-10-26 09:47:00', endTime:'2026-10-26 11:23:00', kwh:61.7, orderAmt:103.24, wlj:1.20, payAmt:74.04, subsidy:29.20, deduct:'已扣减', frozen:0, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '无异常', abnTime: '—', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-26 09:41:53', syncTime:'2026-10-26 11:24:40', stationAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场', locAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场 5 号桩区', locType:'GPS', locTime:'2026-10-26 09:47:00', distKm:'0.08', shipper:'铁岭恒通货运有限公司', goods:'普通货物', weight:'22.00', fromAddr:'铁岭市银州区广裕街 135 号', toAddr:'沈阳市铁西区开发大路 66 号', loadTime:'2026-10-26 05:55:41', unloadTime:'2026-10-26 15:31:18', freightAmt:'3,050.00'},
 {no:'CD20261025000008', ckcNo:'CKC202610251612008', waybill:'W20261025000003', driver:'吴建军', phone:'132****4468', plate:'辽A·M92Q7', status:'已支付', operator:'星星充电', station:'星星充电·沈北新区枢纽站', pile:'B07-01枪', startSoc:47, endSoc:95, startTime:'2026-10-25 16:12:00', endTime:'2026-10-25 17:36:00', kwh:42.5, orderAmt:71.18, wlj:1.15, payAmt:48.88, subsidy:22.30, deduct:'已扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '无异常', abnTime: '—', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-25 16:06:19', syncTime:'2026-10-25 17:38:02', stationAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧', locAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧 3 号桩区', locType:'GPS', locTime:'2026-10-25 16:12:00', distKm:'0.03', shipper:'抚顺同益商贸物流中心', goods:'日用百货', weight:'18.40', fromAddr:'抚顺市顺城区新华大街 61 号', toAddr:'沈阳市沈北新区道义大街 128 号', loadTime:'2026-10-25 10:22:56', unloadTime:'2026-10-25 20:40:33', freightAmt:'2,540.00'},
 {no:'CD20261025000009', ckcNo:'CKC202610251058009', waybill:'W20261025000002', driver:'郑卫东', phone:'131****6642', plate:'辽A·N48S1', status:'充电中', operator:'特来电', station:'特来电·万联物流园充电站', pile:'A05-02枪', startSoc:30, endSoc:'', startTime:'2026-10-25 10:58:00', endTime:'', kwh:18.2, orderAmt:30.51, wlj:1.20, payAmt:21.84, subsidy:8.67, deduct:'未扣减', frozen:398.00, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '未通过', recover:'未追回', fake:'否', createTime:'2026-10-25 10:52:31', syncTime:'2026-10-25 11:40:15', stationAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区', locAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区 充电站入口东侧', locType:'GPS', locTime:'2026-10-25 10:58:00', distKm:'0.06', shipper:'沈阳长鑫冷链物流有限公司', goods:'冷链产品', weight:'28.50', fromAddr:'沈阳市于洪区沈大路 88 号', toAddr:'锦州市太和区解放路 33 号', loadTime:'2026-10-25 06:30:12', unloadTime:'', freightAmt:'3,970.00'},
 {no:'CD20261024000010', ckcNo:'CKC202610241423010', waybill:'W20261024000001', driver:'冯玉梅', phone:'130****2285', plate:'辽A·P63U9', status:'充电中', operator:'小桔充电', station:'小桔充电·铁西工业路站', pile:'C09-02枪', startSoc:26, endSoc:'', startTime:'2026-10-24 14:23:00', endTime:'', kwh:9.6, orderAmt:16.08, wlj:1.18, payAmt:11.33, subsidy:4.75, deduct:'未扣减', frozen:287.00, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '未付款', waybillAbn: '无异常', abnTime: '—', ocr: '未通过', recover:'未追回', fake:'否', createTime:'2026-10-24 14:17:48', syncTime:'2026-10-24 15:05:22', stationAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场', locAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场 5 号桩区', locType:'GPS', locTime:'2026-10-24 14:23:00', distKm:'0.08', shipper:'本溪北台钢材物流园', goods:'钢材制品', weight:'34.60', fromAddr:'本溪市平山区北台路 17 号', toAddr:'沈阳市苏家屯区雪松路 85 号', loadTime:'2026-10-24 09:12:38', unloadTime:'', freightAmt:'4,520.00'},
 {no:'CD20261023000011', ckcNo:'CKC202610230836011', waybill:'W20261023000009', driver:'何永强', phone:'159****3374', plate:'辽A·R17W6', status:'已退款', operator:'星星充电', station:'星星充电·沈北新区枢纽站', pile:'B10-01枪', startSoc:'', endSoc:'', startTime:'2026-10-23 08:36:00', endTime:'', kwh:0, orderAmt:0, wlj:1.20, payAmt:0, subsidy:0, deduct:'未扣减', frozen:0, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '取消运单', abnTime: '2026-10-23 08:30:12', ocr: '未通过', recover:'未追回', fake:'否', createTime:'2026-10-23 08:30:12', syncTime:'2026-10-23 08:38:55', stationAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧', locAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧 3 号桩区', locType:'GPS', locTime:'2026-10-23 08:36:00', distKm:'0.03', shipper:'鞍山百汇商贸物流部', goods:'日用百货', weight:'18.40', fromAddr:'鞍山市铁东区胜利南路 40 号', toAddr:'沈阳市浑南区全运路 109 号', loadTime:'2026-10-23 05:40:27', unloadTime:'', freightAmt:'2,540.00'},
 {no:'CD20261022000012', ckcNo:'CKC202610222014012', waybill:'W20261022000010', driver:'段成林', phone:'158****7719', plate:'辽A·S52X3', status:'已退款', operator:'特来电', station:'特来电·浑南产业新城站', pile:'A11-01枪', startSoc:'', endSoc:'', startTime:'2026-10-22 20:14:00', endTime:'', kwh:0.32, orderAmt:0.54, wlj:1.20, payAmt:0.38, subsidy:0.16, deduct:'已扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '取消运单', abnTime: '2026-10-22 20:08:39', ocr: '未通过', recover:'未追回', fake:'是', createTime:'2026-10-22 20:08:39', syncTime:'2026-10-22 20:22:47', stationAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼', locAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼北侧', locType:'基站', locTime:'2026-10-22 20:14:00', distKm:'0.15', shipper:'营口港丰物流有限公司', goods:'化工原料', weight:'26.10', fromAddr:'营口市西市区滨海路 188 号', toAddr:'沈阳市于洪区沈大路 88 号', loadTime:'2026-10-22 11:05:53', unloadTime:'', freightAmt:'3,680.00'},
 /* 追回相关演示数据：已追回 ×2（取消运单 / 终止结算）、恢复正常支付 ×1（运单异常已撤销）、未追回 ×1（终止结算） */
 {no:'CD20261021000017', ckcNo:'CKC202610210931017', waybill:'W20261021000018', driver:'李春生', phone:'137****5093', plate:'辽A·T24B8', status:'已支付', operator:'特来电', station:'特来电·万联物流园充电站', pile:'A07-03枪', startSoc:24, endSoc:81, startTime:'2026-10-21 09:31:00', endTime:'2026-10-21 10:42:00', kwh:52.0, orderAmt:87.36, wlj:1.20, payAmt:62.40, subsidy:24.96, deduct:'已扣减', frozen:0, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '取消运单', abnTime: '2026-10-21 09:26:38', ocr: '通过', recover:'已追回', fake:'否', createTime:'2026-10-21 09:26:38', syncTime:'2026-10-21 10:44:12', stationAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区', locAddr:'辽宁省沈阳市苏家屯区丁香街 186 号 万联物流园 A 区 3 号桩区', locType:'GPS', locTime:'2026-10-21 09:31:00', distKm:'0.04', shipper:'沈阳长鑫冷链物流有限公司', goods:'冷链产品', weight:'31.20', fromAddr:'沈阳市于洪区沈大路 88 号', toAddr:'哈尔滨市香坊区化四路 22 号', loadTime:'2026-10-21 06:58:14', unloadTime:'', freightAmt:'5,260.00'},
 {no:'CD20261020000018', ckcNo:'CKC202610201548018', waybill:'W20261020000016', driver:'高志伟', phone:'135****7781', plate:'辽A·W61C3', status:'已支付', operator:'星星充电', station:'星星充电·沈北新区枢纽站', pile:'B05-02枪', startSoc:38, endSoc:90, startTime:'2026-10-20 15:48:00', endTime:'2026-10-20 16:55:00', kwh:44.8, orderAmt:74.82, wlj:1.15, payAmt:51.52, subsidy:23.30, deduct:'已扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '终止结算', abnTime: '2026-10-20 15:42:19', ocr: '通过', recover:'已追回', fake:'否', createTime:'2026-10-20 15:42:19', syncTime:'2026-10-20 16:58:40', stationAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧', locAddr:'辽宁省沈阳市沈北新区辉山大街 123 号 枢纽货运站西侧 2 号桩区', locType:'GPS', locTime:'2026-10-20 15:48:00', distKm:'0.05', shipper:'营口港丰物流有限公司', goods:'化工原料', weight:'22.80', fromAddr:'营口市西市区滨海路 188 号', toAddr:'沈阳市铁西区北一西路 26 号', loadTime:'2026-10-20 12:20:07', unloadTime:'', freightAmt:'3,180.00'},
 {no:'CD20261019000019', ckcNo:'CKC202610191022019', waybill:'W20261019000021', driver:'宋晓峰', phone:'136****2245', plate:'辽A·Y98D5', status:'已支付', operator:'小桔充电', station:'小桔充电·铁西工业路站', pile:'C01-02枪', startSoc:44, endSoc:87, startTime:'2026-10-19 10:22:00', endTime:'2026-10-19 11:28:00', kwh:38.6, orderAmt:64.86, wlj:1.18, payAmt:45.55, subsidy:19.31, deduct:'已扣减', frozen:0, whSubj:'万联易达物流科技有限公司', settleSubj:'万联易达物流科技有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '无异常', abnTime: '2026-10-19 10:16:05', ocr: '通过', recover:'恢复正常支付', fake:'否', createTime:'2026-10-19 10:16:05', syncTime:'2026-10-19 11:30:22', stationAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场', locAddr:'辽宁省沈阳市铁西区开发大路 22 号 工业路停车场 6 号桩区', locType:'GPS', locTime:'2026-10-19 10:22:00', distKm:'0.11', shipper:'本溪北台钢材物流园', goods:'钢材制品', weight:'29.40', fromAddr:'本溪市平山区北台路 17 号', toAddr:'沈阳市浑南区全运路 109 号', loadTime:'2026-10-19 07:41:56', unloadTime:'', freightAmt:'4,020.00'},
 {no:'CD20261018000020', ckcNo:'CKC202610180913020', waybill:'W20261018000024', driver:'崔明亮', phone:'138****6630', plate:'辽A·Z15F7', status:'已支付', operator:'特来电', station:'特来电·浑南产业新城站', pile:'A09-01枪', startSoc:29, endSoc:76, startTime:'2026-10-18 09:13:00', endTime:'2026-10-18 10:20:00', kwh:41.2, orderAmt:68.80, wlj:1.20, payAmt:49.44, subsidy:19.36, deduct:'已扣减', frozen:0, whSubj:'鲁通冷链物流有限公司', settleSubj:'鲁通冷链物流有限公司', belongCo: '万联易达物流科技有限公司', waybillPay: '已支付', waybillAbn: '终止结算', abnTime: '2026-10-18 09:08:41', ocr: '通过', recover:'未追回', fake:'否', createTime:'2026-10-18 09:08:41', syncTime:'2026-10-18 10:22:35', stationAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼', locAddr:'辽宁省沈阳市浑南区全运五路 35 号 产业新城配套楼南侧', locType:'GPS', locTime:'2026-10-18 09:13:00', distKm:'0.07', shipper:'沈阳长鑫冷链物流有限公司', goods:'冷链产品', weight:'25.60', fromAddr:'沈阳市于洪区沈大路 88 号', toAddr:'大连市金州区东北大街 66 号', loadTime:'2026-10-18 05:12:30', unloadTime:'', freightAmt:'3,860.00'}
];
/* 4PL 端 · 追回记录（一行＝一次追回登记：追回凭证张数 + 备注 + 操作动作/操作人/操作时间，与油气口径一致） */
LIVE.chargeRecovers = {
  CD20261021000017:{resume:false, opr:'新增', by:'张世民（运营中台）', time:'2026-10-21 15:42:10', remark:'已与云快充核对并线下追缴，款项已退回平台账户', files:2},
  CD20261020000018:{resume:false, opr:'新增', by:'李静（运营中台）', time:'2026-10-20 18:05:33', remark:'终止结算运单已撤回，充电费用由司机账户扣回', files:1},
  CD20261019000019:{resume:true, opr:'恢复正常支付', by:'张世民（运营中台）', time:'2026-10-19 14:20:07', remark:'', files:0}
};
function liveFilters(page){
  return '<div class="card"><div class="filters">'+LIVE_FILTERS[page].map(([label,key,type,opt])=>{
    const id='live-'+page+'-'+key, value=liveQuery[page]?.[key]||'';
    const control=type==='select'
      ?'<select class="inp" id="'+id+'"><option value="">请选择</option>'+opt.map(x=>'<option'+(x===value?' selected':'')+'>'+x+'</option>').join('')+'</select>'
      :type==='selectGroup'
      ?'<select class="inp" id="'+id+'"><option value="">请选择</option>'+opt.map(([g,opts])=>'<optgroup label="'+g+'">'+opts.map(x=>'<option'+(x===value?' selected':'')+'>'+x+'</option>').join('')+'</optgroup>').join('')+'</select>'
      :type==='range'
      ?'<details class="live-date"><summary>'+((Array.isArray(value)&&(value[0]||value[1]))?(value[0]||'开始日期')+' ～ '+(value[1]||'结束日期'):'请选择日期时间范围')+'</summary><div class="live-date-pop"><label>开始日期<input class="inp" id="'+id+'-start" type="date" value="'+(Array.isArray(value)?value[0]:'')+'"></label><label>结束日期<input class="inp" id="'+id+'-end" type="date" value="'+(Array.isArray(value)?value[1]:'')+'"></label></div></details>'
      :type==='amountRange'
      ?'<input class="inp" id="'+id+'-start" type="number" min="0" step="0.01" placeholder="最小" value="'+(Array.isArray(value)?value[0]:'')+'"><span class="dash">～</span><input class="inp" id="'+id+'-end" type="number" min="0" step="0.01" aria-label="'+label+'结束值" placeholder="最大" value="'+(Array.isArray(value)?value[1]:'')+'">'
      :'<input class="inp" id="'+id+'" type="'+(type==='month'?'month':type==='date'?'date':type==='number'?'number':'text')+'" placeholder="'+(Array.isArray(opt)?'':opt)+'" value="'+value+'">';
    return '<div class="f"><label for="'+id+(type==='range'||type==='amountRange'?'-start':'')+'">'+label+'</label><div class="fc">'+control+'</div></div>';
  }).join('')+'</div><div class="filter-actions"><span class="filter-note">'+({orders:'支付、核销、退款、服务费和发票分别维护状态',fee:'明细是服务费唯一业务事实，公式和系数使用订单发生时快照',refund:'撮合退款仅支持待核销一键支付订单整单全额退款'}[page]||'')+'</span><button class="btn" onclick="liveReset(\''+page+'\')">重置</button><button class="btn primary" onclick="liveSearch(\''+page+'\')">⌕&nbsp; 搜索</button></div></div>';
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
  const name={orders:'orders',fee:'fees',refund:'refunds',energyInvApply:'energyInvoices',feeInvApply:'feeInvoices',serviceFee:'feeFlows',withdrawRecord:'withdrawals',chargeOrders:'chargeOrders',driverOil:'driverOil',oilAccount:'oilAccounts',driverOilLog:'oilLogs',driverWaybills:'driverWaybills',oilRules:'oilRules',wljRules:'wljRules',ownerRebates:'ownerRebates'}[page];
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
      page==='orders'&&key==='station'?r.station+' '+r.stationCo:
      page==='orders'&&key==='invCh'?(r.invCh||'线下'):
      page==='orders'&&key==='invoiceLq'?((r.invCh||'线下')==='乐企'?String(r.invoice||''):'\u0000'):
      page==='orders'&&key==='invoice'?((r.invCh||'线下')==='乐企'?'\u0000':String(r.invoice||'')):
      r[key];
    return String(searchable??'').toLowerCase().includes(value.toLowerCase());
  }));
}
function liveTable(headers,rows,width='1500px'){
  /* 末列为操作列：表体统一用 class="acts" 冻结在右，表头必须同样冻结，
     否则横向滚动后表头与表体会错开一列（表头不冻结、表体冻结）。 */
  const head = headers.map((h,i)=>
    i===headers.length-1 ? '<th class="acts">'+h+'</th>' : '<th>'+h+'</th>').join('');
  return '<div class="tablewrap"><table style="min-width:'+width+'"><thead><tr>'+head+'</tr></thead><tbody>'+ (rows.length?rows.join(''):'<tr><td class="empty" colspan="'+headers.length+'">暂无符合条件的数据</td></tr>')+'</tbody></table></div>';
}
const liveMoney = n=>'¥'+money(n);
const liveAct=(kind,key,label='详情')=>'<button type="button" onclick="liveDrawer(\''+kind+'\',\''+key+'\')">'+label+'</button>';
const liveBtn=(kind,key,label)=>'<button type="button" class="btn sm" onclick="liveModal(\''+kind+'\',\''+key+'\')">'+label+'</button>';
const liveBadge=s=>pill(s);
function liveExport(page){showToast('已按当前筛选条件提交导出任务，请在下载中心查看');}
function liveSection(title,rows){
  return '<div class="card"><div class="card-b"><div class="sec-title">'+title+'</div><dl class="kv oms-live-kv">'+rows.map(([k,v])=>'<div class="oms-live-field"><dt>'+k+'</dt><dd>'+v+'</dd></div>').join('')+'</dl></div></div>';
}
/* —— 4PL 编辑/详情页：独立新页面，UI 对齐现网 wk-editform（面包屑 + 分组 header 卡 + 两列表单 + 底部按钮条） —— */
const ENUMS={
  netSubjects:['万联易达物流科技有限公司','太原万联易达供应链管理有限公司霍林郭勒分公司','芜湖万联易达物流发展有限公司','北京万联易达信息科技有限公司','太原万联易达供应链管理有限公司-','鲁通冷链物流有限公司','八通物流-'],
  owners:['北京小桔科技集团有限公司','宁波智赋科技','（其他全部货主）','天地华宇汽车租赁(上海)有限公司','西安市临潼区梦甜电子商务商行（个体工商户）','山东鲁冰花物流有限公司','合肥颀中科技股份有限公司','宁波市鄞州姜山物流有限公司','淘宝（中国）软件有限公司'],
  ownersSub:['北京小桔科技集团有限公司','宁波智赋科技','天地华宇汽车租赁(上海)有限公司','西安市临潼区梦甜电子商务商行（个体工商户）','淘宝（中国）软件有限公司','景德镇市景川物流有限公司','北京智者天下科技有限公司','（其他全部货主）通用补贴配置']
};
const liveSel=(opts,cur)=>'<select class="sel">'+opts.map(o=>'<option'+(o===cur?' selected':'')+'>'+o+'</option>').join('')+'</select>';
const liveCrumb=(listPage,listName,cur)=>'<div class="crumbbar"><a onclick="go(\''+listPage+'\')">能源对接管理</a><span class="sep">/</span><a onclick="go(\''+listPage+'\')">'+listName+'</a><span class="sep">/</span><b>'+cur+'</b></div>';
const liveEditCard=(title,sub,tips,inner)=>'<div class="editcard"><div class="editcard-h"><span>'+title+'</span>'+(sub?'<span class="hsub">'+sub+'</span>':'')+'</div>'+(tips?'<div class="editcard-tips">'+tips+'</div>':'')+'<div class="editcard-b"><div class="formgrid">'+inner+'</div></div></div>';
const liveFi=(label,inner,hint,cls,help)=>{
  const req=/✱/.test(label);
  return '<div class="fi'+(cls==='full'?' full':'')+'">'
    +'<div class="fi-l"><label>'+(req?'<span class="req">✱</span>':'')+label.replace('✱','')+'</label>'+(help?leqiFieldHelp(help):'')+'</div>'
    +'<div class="fi-c">'+inner+'</div>'
    +(hint?'<div class="fi-h">'+hint+'</div>':'')
    +'</div>';
};
const liveUnit=(input,unit)=>'<span class="fi-inline">'+input+'<span>'+unit+'</span></span>';
const liveEditBtns=(page,save)=>'<div class="editbtns"><button type="button" class="btn" onclick="go(\''+page+'\')">取消</button><button type="button" class="btn primary" onclick="showToast(\'已'+(save?'保存':'提交')+'（演示）\');go(\''+page+'\')">'+(save?'保存':'确认')+'</button></div>';

/* 能源规则编辑页（现网 addOliRule 全字段 + 能源类型 + 电比率上限 25%） */
VIEWS.oilRuleEdit=()=>{
  const d=liveEditCurrent.oilRule||{name:'',subj:'',owner:'',etype:'油气',rate:'',gnode:'装车',rnode:'卸货后',sub:'司机补贴',fence:'',st:'启用'};
  const edit=!!liveEditCurrent.oilRule;
  return liveCrumb('oilRules','能源规则配置',edit?'编辑能源规则':'新增能源规则')
    +liveEditCard('基本信息','',null,
       liveFi('✱能源配置规则名称','<input class="inp" value="'+(d.name||'')+'" maxlength="20" placeholder="0/20">')
      +liveFi('能源类型','<label class="rb"><input type="radio" name="fr-etype" '+(d.etype==='油气'?'checked':'')+'> 油气</label><label class="rb"><input type="radio" name="fr-etype" '+(d.etype==='电'?'checked':'')+'> 电</label>','电规则＝分电规则；同一「网货主体＋货主企业＋能源类型」三维唯一',null,'etypeTip')
      +liveFi('✱网货主体',liveSel(ENUMS.netSubjects, d.subj))
      +liveFi('货主企业',liveSel(ENUMS.owners, d.owner))
      +liveFi('起止时间','<input class="inp grow" placeholder="开始日期"><span class="range-sep">至</span><input class="inp grow" placeholder="结束日期">'))
    +liveEditCard('派发规则','',null,
       liveFi('✱能源派发方式','<select class="sel"><option>按运费比例</option></select>')
      +liveFi('派发比例','<input class="inp" value="'+d.rate+'" style="max-width:120px">','能源类型=电 时不得超过「分电上限比例配置」上限（当前 '+liveCapElec.toFixed(2)+'%）；油气规则沿用「分油上限比例配置」（当前 '+liveCapOil.toFixed(2)+'%）；超出保存拦截',null,'eRateCap')
      +liveFi('是否有补贴','<label class="rb"><input type="checkbox" '+(String(d.sub).includes('货主')?'checked':'')+'> 货主补贴</label><label class="rb"><input type="checkbox" '+(String(d.sub).includes('司机')?'checked':'')+'> 司机补贴</label>')
      +liveFi('能源派发节点','<label class="rb"><input type="radio" name="fr-gn" '+(d.gnode==='装车'?'checked':'')+'> 装车</label><label class="rb"><input type="radio" name="fr-gn" '+(d.gnode!=='装车'?'checked':'')+'> 货主结算后（一笔付）</label>','电规则派发节点=装车：装车即按分电规则派发电额度','full')
      +liveFi('能源回收节点','<label class="rb"><input type="radio" name="fr-rn" '+(d.rnode==='卸货后'?'checked':'')+'> 卸货后</label><label class="rb"><input type="radio" name="fr-rn" '+(String(d.rnode).startsWith('卸货后结算前')?'checked':'')+'> 卸货后结算前</label><label class="rb"><input type="radio" name="fr-rn" '+(String(d.rnode).startsWith('货主结算后')?'checked':'')+'> 货主结算后N天</label>','电额度回收同口径','full'))
    +liveEditCard('合规配置','',null,
       liveFi('电子围栏',liveUnit('<input class="inp" value="'+d.fence+'" style="max-width:140px">','米'))
      +liveFi('车辆定位校验要求','<label class="rb"><input type="radio" name="fr-loc" checked> 校验北斗定位</label><label class="rb"><input type="radio" name="fr-loc"> 不校验北斗定位</label>','','full')
      +liveFi('拍照证明要求','<label class="rb"><input type="radio" name="fr-photo" checked> 全部要求</label><label class="rb"><input type="radio" name="fr-photo"> 车辆获取不到要求</label>','','full')
      +liveFi('一天加注上限（油）',liveUnit('<input class="inp" value="" style="max-width:110px">','L'))
      +liveFi('一天加注上限（气）',liveUnit('<input class="inp" value="" style="max-width:110px">','m³'))
      +liveFi('一天加注次数上限',liveUnit('<input class="inp" value="" style="max-width:110px">','次'),'电充电走云快充订单管控（可充度数＝冻结额度÷万联价），不适用加注上限','full'))
    +liveEditBtns('oilRules');
};
/* 司机补贴规则编辑页（现网 addDriverSubsidyRule + 电补贴比例；底部按钮=保存） */
VIEWS.wljRuleEdit=()=>{
  const d=liveEditCurrent.wljRule||{subj:'',owner:'',oil:'',gas:'',elec:''};
  const edit=!!liveEditCurrent.wljRule;
  return liveCrumb('wljRules','司机补贴规则配置',edit?'编辑司机补贴规则':'新增司机补贴规则')
    +liveEditCard('基本信息','',null,
       liveFi('✱适用网货主体',liveSel(ENUMS.netSubjects, d.subj))
      +liveFi('✱生效时间','<input class="inp grow" placeholder="开始日期"><span class="range-sep">至</span><input class="inp grow" placeholder="结束日期">'))
    +liveEditCard('货主补贴配置','',null,
       liveFi('选择货主企业','<div class="fi-stack">'+liveSel(ENUMS.ownersSub, d.owner)+'<button type="button" class="btn sm">添加货主企业</button></div>','按组合配置，支持（其他全部货主）通用配置'))
    +liveEditCard('司机补贴规则','',null,
       liveFi('天然气补贴比例(%)','<input class="inp" value="'+(d.gas||'')+'" style="max-width:120px">')
      +liveFi('柴油补贴比例(%)','<input class="inp" value="'+(d.oil||'')+'" style="max-width:120px">')
      +liveFi('电补贴比例(%)','<input class="inp" value="'+(d.elec==='—'?'':d.elec)+'" style="max-width:120px">','0–10，最多两位小数（与柴油/天然气同规则）；用于计算电的万联价（订单创建时快照）：司机扣款＝万联价×实际充电度数，补贴金额＝云快充金额−万联价扣款',null,'eRateTip'))
    +liveEditBtns('wljRules',true);
};
/* 货主油气返利编辑页（对齐现网 addOwnerOliConfig：以货主为主 → N 个网货主体块 → 每块 N 段占比区间；本期区间新增电费率）
   编辑态：货主企业、网货主体置灰只读；返利规则可切换；新增态可选。 */
const REBATE_RULES=['按费率','按能源额度'];
const REBATE_RANGE_MAX=35;   /* 每个网货主体下能源占比区间上限（282.5：8→35），达到上限后「添加范围」不再展示 */
const rebateEmptyRange=()=>({from:'',to:'',diesel:'',gas:'',elec:''});
const rebateEmptyBlock=()=>({subj:'',rule:'按费率',bindTip:false,ranges:[rebateEmptyRange()]});
let liveRebate=null, liveRebateErr=null;
function rebateFromOwner(owner){
  const rows=(LIVE.ownerRebates||[]).filter(r=>r.owner===owner);
  const first=rows[0]||{};
  const parts=String(first.range||'——').split('——');
  return {owner,start:parts[0]||'',end:parts[1]||'',by:first.by||'',ut:first.ut||'',
    blocks:rows.map(r=>({subj:r.subj,rule:r.rule,bindTip:!!r.bindTip,ranges:(r.ranges||[rebateEmptyRange()]).map(x=>({...x}))}))};
}
function openRebateEdit(owner){
  liveRebate=owner?rebateFromOwner(owner):{owner:'',start:'',end:'',by:'',ut:'',blocks:[rebateEmptyBlock()]};
  liveRebateErr=null; go('ownerRebateEdit');
}
function rebateSetTop(k,v){liveRebate[k]=v;}
function rebateSet(i,j,k,v){liveRebate.blocks[i].ranges[j][k]=v;}
function rebateSetRule(i,v){liveRebate.blocks[i].rule=v;paint();}
function rebateSetSubj(i,v){liveRebate.blocks[i].subj=v;paint();}
function rebateAddBlock(){liveRebate.blocks.push(rebateEmptyBlock());paint();}
function rebateDelBlock(i){liveRebate.blocks.splice(i,1);paint();}
function rebateAddRange(i){liveRebate.blocks[i].ranges.push(rebateEmptyRange());paint();}
function rebateDelRange(i,j){liveRebate.blocks[i].ranges.splice(j,1);paint();}
function rebateValidate(d){
  const errs={owner:!d.owner,time:!(d.start&&d.end),blocks:[]}, seen={};
  d.blocks.forEach(b=>{
    const be={subj:!b.subj,dup:!!(b.subj&&seen[b.subj]),ranges:[]};
    if(b.subj) seen[b.subj]=true;
    b.ranges.forEach(r=>{
      const e={}, a=String(r.from).trim(), z=String(r.to).trim();
      if(!a||!z) e.empty=true;
      if((a&&(Number(a)<0||Number(a)>100))||(z&&(Number(z)<0||Number(z)>100))) e.range=true;
      if(a&&z&&Number(a)>=Number(z)) e.order=true;
      ['diesel','gas','elec'].forEach(k=>{
        const v=String(r[k]).trim();
        if(!v) e[k]='empty'; else if(Number(v)<0||Number(v)>100) e[k]='range';
      });
      be.ranges.push(e);
    });
    for(let x=0;x<b.ranges.length;x++)for(let y=x+1;y<b.ranges.length;y++){
      const p=b.ranges[x],q=b.ranges[y];
      if(p.from!==''&&p.to!==''&&q.from!==''&&q.to!==''&&Number(p.from)<Number(q.to)&&Number(q.from)<Number(p.to)){be.ranges[x].overlap=true;be.ranges[y].overlap=true;}
    }
    errs.blocks.push(be);
  });
  return errs;
}
const rebateAnyErr=e=>!e?false:(e.owner||e.time||(e.blocks||[]).some(b=>b.subj||b.dup||b.ranges.some(r=>r.empty||r.range||r.order||r.overlap||r.diesel||r.gas||r.elec)));
function rebateSave(){
  const errs=rebateValidate(liveRebate);
  if(rebateAnyErr(errs)){liveRebateErr=errs;paint();showToast('请先修正标红的配置项');return;}
  liveRebateErr=null;showToast('已保存（演示）');go('ownerRebates');
}
const REBATE_LOGS={
  '北京小桔科技集团有限公司':[
    {act:'修改',by:'平台超级管理员',at:'2026-10-29 13:53',note:'网货主体【芜湖万联易达物流发展有限公司】修改后：能源占比区间1~40，柴油优惠费率4%，天然气优惠费率5%，电优惠费率3%'},
    {act:'新增',by:'平台超级管理员',at:'2026-10-29 13:53',note:'网货主体【万联易达物流科技有限公司】返利规则按能源额度：能源占比区间0~30，柴油返利比例3%，天然气返利比例4%，电返利比例2%'},
    {act:'新增',by:'平台超级管理员',at:'2026-10-29 13:41',note:'网货主体【太原万联易达供应链管理有限公司霍林郭勒分公司】新增3段区间：0~10 / 10~25 / 25~40'}
  ]
};
function rebateLogRows(owner){
  const rows=REBATE_LOGS[owner]||[{act:'修改',by:liveRebate&&liveRebate.by||'平台超级管理员',at:(liveRebate&&liveRebate.ut||'2026-10-29 13:53').slice(0,16),note:'网货主体【'+(liveRebate&&liveRebate.blocks[0]&&liveRebate.blocks[0].subj||'—')+'】修改后：能源占比区间1~40，柴油优惠费率4%，天然气优惠费率5%，电优惠费率3%'}];
  return rows.map((r,i)=>'<tr><td class="num">'+(i+1)+'</td><td>'+r.act+'</td><td>'+r.by+'</td><td class="mono">'+r.at+'</td><td>'+r.note+'</td></tr>').join('');
}
VIEWS.ownerRebateEdit=()=>{
  if(!liveRebate||!liveRebate.blocks) liveRebate={owner:'',start:'',end:'',by:'',ut:'',blocks:[rebateEmptyBlock()]};
  const d=liveRebate;
  const E=liveRebateErr||{blocks:[]};
  const edit=!!d.owner;
  const rateNameOf=rule=>rule==='按能源额度'?'返利比例':'优惠费率';
  const field=(label,inner,x)=>{
    x=x||{};
    return '<div class="fi'+(x.full?' full':'')+'">'
      +'<div class="fi-l"><label>'+(/✱/.test(label)?'<span class="req">✱</span>':'')+label.replace('✱','')+'</label></div>'
      +'<div class="fi-c">'+inner+'</div>'
      +(x.hint?'<div class="fi-h">'+x.hint+'</div>':'')
      +(x.err?'<div class="err">'+x.err+'</div>':'')
      +'</div>';
  };
  const numInput=(i,j,k,v)=>'<input class="inp rb-num" inputmode="decimal" value="'+String(v==null?'':v)+'" oninput="rebateSet('+i+','+j+',\''+k+'\',this.value)">';
  const rateErr=(e,k)=>{const x=e&&e[k];return x==='range'?'须在 0–100 之间':x==='empty'?'请输入':'';};
  const blocks=d.blocks.map((b,i)=>{
    const be=(E.blocks&&E.blocks[i])||{ranges:[]};
    const rateName=rateNameOf(b.rule);
    const head='<div class="rb-block-h"><span>网货主体：</span>'+(d.blocks.length>1?'<button type="button" class="link-danger" onclick="rebateDelBlock('+i+')">删除网货主体配置</button>':'')+'</div>';
    const base='<div class="formgrid rb-grid">'
      +field('✱网货主体', edit
          ? '<input class="inp" value="'+b.subj+'" disabled>'
          : '<select class="sel" onchange="rebateSetSubj('+i+',this.value)">'+['请选择网货主体'].concat(ENUMS.netSubjects).map(o=>'<option'+(o===b.subj?' selected':'')+'>'+o+'</option>').join('')+'</select>',
          {hint:b.bindTip?'企业和网货主体没有关联关系，请确认是否有误':'',err:be.subj?'请选择网货主体':be.dup?'该网货主体已添加，请勿重复配置':''})
      +field('✱返利规则','<select class="sel" onchange="rebateSetRule('+i+',this.value)">'+REBATE_RULES.map(o=>'<option'+(o===b.rule?' selected':'')+'>'+o+'</option>').join('')+'</select>')
      +'</div>';
    const ranges=b.ranges.map((r,j)=>{
      const e=(be.ranges&&be.ranges[j])||{};
      const rangeErr=e.empty?'请输入占比范围':e.range?'占比范围须在 0–100 之间':e.order?'起点须小于终点':e.overlap?'区间不能重叠':'';
      return '<div class="formgrid rb-range">'
        +field('✱能源占比范围',numInput(i,j,'from',r.from)+'<span class="range-sep">—</span>'+numInput(i,j,'to',r.to)+'<span class="unit">%</span>',{err:rangeErr})
        +field('✱柴油'+rateName,numInput(i,j,'diesel',r.diesel)+'<span class="unit">%</span>',{err:rateErr(e,'diesel')})
        +field('✱天然气'+rateName,numInput(i,j,'gas',r.gas)+'<span class="unit">%</span>',{err:rateErr(e,'gas')})
        +field('✱电'+rateName,numInput(i,j,'elec',r.elec)+'<span class="unit">%</span>',{err:rateErr(e,'elec')})
        +'<div class="rb-range-op">'+(b.ranges.length>1?'<button type="button" class="link-danger" onclick="rebateDelRange('+i+','+j+')">删除</button>':'')+'</div>'
        +'</div>';
    }).join('');
    return '<div class="rb-block">'+head+base
      +'<div class="rb-sub">返利配置：</div>'+ranges
      +(b.ranges.length<REBATE_RANGE_MAX?'<button type="button" class="btn sm" onclick="rebateAddRange('+i+')">添加范围</button>':'')+'</div>';
  }).join('');
  return liveCrumb('ownerRebates','货主能源返利配置',edit?'编辑货主能源返利配置':'新增货主能源返利配置')
    +liveEditCard('主要信息','',null,
       field('✱选择货主企业', edit
           ? '<input class="inp" value="'+d.owner+'" disabled>'
           : '<select class="sel" onchange="rebateSetTop(\'owner\',this.value)">'+['请选择货主企业'].concat(ENUMS.owners).map(o=>'<option'+(o===d.owner?' selected':'')+'>'+o+'</option>').join('')+'</select>',
           {err:E.owner?'请选择货主企业':''})
      +field('✱起止时间','<input class="inp grow" value="'+d.start+'" placeholder="开始日期时间" oninput="rebateSetTop(\'start\',this.value)"><span class="range-sep">至</span><input class="inp grow" value="'+d.end+'" placeholder="结束日期时间" oninput="rebateSetTop(\'end\',this.value)">',{err:E.time?'请选择起止时间':''}))
    +'<div class="editcard"><div class="editcard-h"><span>网货主体</span><span class="hsub">按货主配置多个网货主体，每个网货主体可分别设置返利规则与多段占比区间</span></div>'
      +'<div class="editcard-b"><div class="editcard-tips" style="padding:0 0 10px">能源占比比例为能源费用占总运费的比例：【按能源额度】按实际使用能源金额×比例进行返利；【按费率】按货主实际支付运费＝司机运费 /（1−（客户实际费率−配置的优惠费率））。电订单同口径：按电优惠费率计算货主返利，复用能源返利链路</div>'
      +'<button type="button" class="btn sm primary" onclick="rebateAddBlock()">添加网货主体配置</button>'+blocks+'</div></div>'
    +(edit?'<div class="editcard"><div class="editcard-h"><span>操作记录</span><span class="hsub">新增 / 修改 / 启用 / 停用均留痕</span></div>'
      +'<div class="editcard-b">'+liveTable(['序号','操作动作','操作人姓名','操作时间','备注'],[rebateLogRows(d.owner)],'1000px')+pagerHTML((REBATE_LOGS[d.owner]||[1]).length)+'</div></div>':'')
    +'<div class="editbtns"><button type="button" class="btn" onclick="go(\'ownerRebates\')">取消</button><button type="button" class="btn primary" onclick="rebateSave()">保存</button></div>';
};
const LIVE_EDIT_KEY={oilRule:'oilRules',wljRule:'wljRules',ownerRebate:'ownerRebates'};
const liveEditCurrent={oilRule:null,wljRule:null,ownerRebate:null};
function openRuleEdit(page,pageKey,key){
  liveEditCurrent[pageKey] = key ? (LIVE[LIVE_EDIT_KEY[pageKey]]||[]).find(r=>r.name===key||r.owner===key) : null; go(page);
}
function liveHead(title,subtitle,status,amount,label){
  return '<div class="sumhead"><div class="no mono">'+title+'</div><div class="sec">'+subtitle+'</div><div class="pills">'+liveBadge(status)+'</div><div class="money"><div class="oilv"><div class="l">'+label+'</div><div class="v num">'+liveMoney(amount)+'</div></div></div></div>';
}
function liveListCard(title,extra,headers,rows,width){
  const page=current;
  const listOnly=['orders','fee','refund','withdrawRecord'].includes(page);
  const leading=['orders','fee','refund','withdrawRecord'].includes(page);
  const label=page==='energyInvApply'||page==='feeInvApply'?'共 <b>'+rows.length+'</b> 笔申请':'共 <b>'+rows.length+'</b> 条';
  const summary=page==='refund'?'<span class="live-refund-summary">待油站审核 <b>1</b>　退款处理中 <b>0</b>　本月已退款 <b>¥0.10</b></span>':'';
  /* 与「能源订单管理」一致：列表操作按钮统一放卡头左侧（标题之后），汇总/统计放右侧 */
  return '<div class="card live-list-card live-list-'+page+'"><div class="card-h">'+(listOnly?'':'<h2>'+title+'</h2><span class="title-stat">'+label+'</span>')+(extra||'')+'<span class="spacer"></span>'+summary+'</div>'+liveTable(headers,rows,width)+pagerHTML(rows.length)+'</div>';
}

/* 乐企渠道：手动开票可用状态（未开票/开票失败/已红冲）；手动红冲可用状态（开票成功/红冲失败重发），红冲完可再开票 */
const liveLeqiRefunded=o=>['退款中','退款成功'].includes(o.status);
const liveLeqiCanInvoice=o=>(o.invCh||'线下')==='乐企'&&['未开票','开票失败','已红冲'].includes(o.invoice)&&!liveLeqiRefunded(o);
const liveLeqiCanRed=o=>(o.invCh||'线下')==='乐企'&&['开票成功','红冲失败'].includes(o.invoice);
/* 退款与开票联动：开票中/红冲中（进行中）不可申请退款；未开票/开票失败/开票成功/红冲失败/已红冲（终态）可申请 */
const liveLeqiRefundBlocked=o=>o.invoice==='开票中'||o.invoice==='红冲中';
const liveRefundOp=o=>o.refundable?(liveLeqiRefundBlocked(o)?' <button type="button" class="btn sm off" title="开票/红冲进行中，暂不可申请退款">申请退款</button>':' '+liveBtn('refundApply',o.no,'申请退款')):'';
const liveInvCh=o=>(o.invCh||'线下')==='乐企'?'<span class="tag f">乐企</span>':'<span class="tag">线下</span>';
const liveLeqiHasInv=o=>(o.invCh||'线下')==='乐企'&&(o.invoice==='开票成功'||o.invoice==='已红冲')&&!!leqiLatestInv(o.no);
const liveInvOp=o=>'<button type="button" onclick="liveDrawer(\'order\',\''+o.no+'\',1)" title="该订单全部蓝/红票查看与下载">发票查看下载</button>';
VIEWS.orders=()=>{
  const list=liveRows('orders');
  const rows=list.map(o=>{
    const invCh=o.invCh||'线下';
    const check=((o.invoice==='未开票'||o.invoice==='已撤销')&&o.status==='支付成功'&&!LIVE.refunds.some(r=>r.order===o.no&&r.status==='待审核'))||(invCh==='乐企'&&(o.invoice==='开票成功'||o.invoice==='已红冲'));
    return '<tr><td><input type="checkbox" class="live-order-check" value="'+o.no+'" '+(check?'':'disabled')+' aria-label="选择订单 '+o.no+'"></td><td><b class="mono">'+o.no+'</b><div class="t2">'+o.time+' · '+o.source+'</div></td><td>'+liveBadge(o.status)+'<div class="t2">'+o.verify+'</div></td><td>'+liveInvCh(o)+'</td><td>'+liveBadge(o.invoice)+'</td><td>'+(o.invFail?'<span style="color:var(--bad);font-size:12px">'+o.invFail+'</span>':'—')+'</td><td>'+o.customer+'<div class="t2">撮合账户 · '+o.energy+'</div></td><td>'+o.driver+' · '+o.phone+'<div class="t2">'+o.plate+'</div></td><td>'+o.station+'<div class="t2">'+o.stationCo+'</div></td><td>'+o.goods+'<div class="t2">'+o.qty+' · 油机价 '+o.machinePrice+' · 企业价 '+o.enterprisePrice+'</div></td><td class="num">'+liveMoney(o.amount)+'</td><td>客户 '+liveMoney(o.customerFee)+' · 油站 '+liveMoney(o.stationFee)+'<div class="t2">'+o.feeState+'</div></td><td class="acts">'+liveAct('order',o.no)+(liveLeqiCanInvoice(o)?' '+liveBtn('leqiInvoice',o.no,'手动开票'):'')+(liveLeqiCanRed(o)?' <button type="button" class="btn sm danger" onclick="liveModal(\'leqiRed\',\''+o.no+'\')" title="对当前开票成功的蓝票发起冲红">手动红冲</button>':'')+(liveLeqiHasInv(o)?' '+liveInvOp(o):'')+(liveRefundOp(o))+'</td></tr>';
  });
  return liveFilters('orders')+liveListCard('能源订单管理','<button class="btn sm" onclick="liveDrawer(\'backfill\',\'new\')">撮合订单补单</button><button class="btn sm" onclick="liveExport(\'orders\')">导出</button><button class="btn sm" onclick="liveModal(\'leqiDownload\',\'\')">批量下载发票</button><button class="btn sm primary" onclick="liveModal(\'energyBatch\',\'\')">批量申请开票</button>', ['选择','订单信息','订单状态','开票渠道'+leqiFieldHelp('invCh'),'开票状态'+leqiFieldHelp('invStatus'),'失败原因'+leqiFieldHelp('invFail'),'客户公司','司机与车辆','油站 / 油站公司','加注油品','金额信息','服务费','操作'+leqiFieldHelp('orderOps')],rows,'2660px')+notes(
    nb('实际页面口径','<p>支付、核销、退款、服务费与发票分别维护状态。能源订单编号以 MH 开头；退款申请仅适用于待核销的一键支付订单。列表中的客户与油站服务费分别显示，客户无服务费时金额为 0。</p>')+
    nb('乐企开票：支付即开票（渠道分治）',
      '<p><b>开票渠道=乐企</b>的订单（柴油 ＋ 易宝支付 ＋ 网点一级渠道=自营），支付成功后系统实时调用乐企自动开票，交易与开票解耦：开票失败不影响订单交易完成。票面销方=油站公司，购方按业务线取（自营=平台内部主体，撮合=客户公司）。</p>'+
      tbl(['场景','口径'],[
        ['开票状态','乐企渠道 7 值：未开票/开票中/开票失败/开票成功/红冲中/红冲失败/已红冲；线下渠道订单沿用 4 值（未开票/开票中/已开票/已撤销），同列分治展示，筛选按渠道分组'],
        ['开票失败','自动重试每分钟 1 次×3 次（重试开具），仍失败停留「开票失败」并展示失败原因，转人工手动开票或技术排查'],
        ['开票触发','易宝支付成功即触发，不再校验分账处理完成；一单一票（一张票对一张订单，不按子订单/运单拆分）；订单实付金额中已拆出优惠抵扣时，票面带 1 行负数折扣行（折扣行＝油站给购方的优惠，如充值返利；平台补贴不进折扣行）'],
        ['手动开票','可用状态=未开票/开票失败/已红冲，且订单不处于退款中/已退款；已红冲重开蓝票用于「换开」等需要再次开票的场景（红冲完成后即可发起）；退款中/已退款订单不展示入口并停止失败自动重试'],
        ['手动红冲','<b>仅乐企渠道开放</b>；可用状态=开票成功/红冲失败（重发）；必填红冲原因 5–200 字写入开票记录；成功→已红冲（原蓝票冲销）可再次手动开票，失败→红冲失败展示乐企原因；退款红冲（审核通过触发）与本入口互为补充，红冲中拦截退款审核'],
        ['红冲范围','只红冲<b>油站开出的这张乐企票</b>；平台开给客户的发票在线下渠道处理，不在本链路红冲。撮合退款＝油站退客户，属油站侧退款，因此走「先红冲后退款」'],
        ['批量下载发票','勾选「开票成功/已红冲」的乐企订单，仅下载各单最新 1 次发票，不限格式 url/pdf/ofd；乐企订单不进「批量申请开票」勾选池'],
        ['发票附件','详情抽屉「发票信息」页签展示全部蓝红票+开票记录；操作列「发票查看下载」仅开票成功/已红冲可见，点击直达该抽屉，全部蓝/红票可逐张查看下载（不限格式 url/pdf/ofd）'],
        ['退款与开票联动','开票中/红冲中（进行中）不允许申请退款，操作列「申请退款」按钮置灰；未开票/开票失败/开票成功/红冲失败/已红冲（终态）可申请退款；红冲中同时拦截退款审核']
      ])));
};
VIEWS.fee=()=>{
  const list=liveRows('fee');
  const rows=list.map(f=>'<tr><td><input type="checkbox" class="live-fee-check" value="'+f.no+'" '+(f.amount>0&&(f.invoice==='未开票'||f.invoice==='已撤销')?'':'disabled')+' aria-label="选择服务费流水 '+f.no+'"></td><td class="mono">'+f.no+'</td><td class="mono">'+f.third+'</td><td class="mono">'+f.order+'</td><td class="mono">'+f.time+'</td><td>'+f.payer+'<div class="t2">'+f.payerName+'</div></td><td>'+f.customer+'</td><td>'+f.station+'</td><td class="num">'+liveMoney(f.amount)+'</td><td>'+liveBadge(f.payment)+'</td><td>'+liveBadge(f.invoice)+'</td><td>'+liveBadge(f.energyInvoice)+'</td><td class="mono">'+f.energyApply+'</td><td class="acts">'+liveAct('fee',f.no)+'</td></tr>');
  return liveFilters('fee')+liveListCard('服务费订单管理','<button class="btn sm" onclick="liveExport(\'fee\')">导出</button><button class="btn sm primary" onclick="liveModal(\'feeBatch\',\'\')">批量申请开票</button>', ['选择','服务费流水号','三方服务费交易流水号','关联加油订单','发生时间','支付方','关联客户','关联油站','服务费金额','支付状态','服务费开票状态','能源订单开票状态','能源发票申请单号','操作'],rows,'2400px')+notes(nb('关联与金额口径','<p>一条服务费流水是一条独立业务事实；退款冲销可出现负金额。能源订单开票状态与能源发票申请单号读取明确关联的能源订单及申请单，缺少可靠关系显示“—”。服务费开票状态独立维护，枚举：未开票 / 开票中 / 已开票 / 已撤销；开票中为已提交开票申请、尚未完成，已撤销为申请撤销后可重新申请的状态。</p>'));
};
VIEWS.refund=()=>{
  const list=liveRows('refund');
  const rows=list.map(r=>'<tr><td><b class="mono">'+r.no+'</b><div class="t2">整单全额退款</div></td><td class="mono">'+r.order+'<div class="t2">'+r.customer+'</div></td><td>'+r.driver+' · '+r.phone+'<div class="t2">'+r.plate+'</div></td><td>'+r.station+'</td><td class="num">'+liveMoney(r.amount)+'<div class="t2">双方服务费影响 '+liveMoney(r.fee)+'</div></td><td>'+r.reason+'<div class="t2">'+r.source+'</div></td><td>'+liveBadge(r.status)+'<div class="t2">'+r.time+'</div></td><td class="acts">'+liveAct('refund',r.no)+(r.status==='待审核'?' '+liveAct('refundAudit',r.no,'审核'):'')+'</td></tr>');
  return liveFilters('refund')+liveListCard('退款申请管理','<button class="btn sm" onclick="liveExport(\'refund\')">导出</button>', ['退款申请','原订单与客户','司机与车辆','油站','退款金额','申请原因','状态与时间','操作'],rows,'1550px')+notes(
    nb('退款资格与影响','<p>当前撮合退款仅支持待核销一键支付订单的整单全额退款；开票渠道订单仅开票终态（未开票/开票失败/开票成功/红冲失败/已红冲）可发起退款申请，开票中/红冲中为进行中状态、入口置灰。审核通过后，商品本金原路退回，已支付服务费原路退回、未支付服务费取消应收，关联网货子单冲销并恢复司机扣减或补贴。申请处理中暂停核销和新开票。</p>')+
    nb('乐企开票订单的退款：先红冲后退款',
      '<p>开票渠道=<b>乐企</b>的订单（开票成功），退款审核通过后<b>必须先红冲原蓝票</b>（由退款审核通过触发），红冲成功后才执行退款；红冲进行中的订单拦截审核。手动红冲为运营主动换开场景的独立入口（订单列表操作列），不影响退款流程。</p>'+
      '<p style="margin-top:6px"><b>红冲范围：</b>只红冲油站开出的这张乐企票；平台开给客户的发票线下处理，不在本链路红冲。撮合退款＝油站退客户，属油站侧退款，因此走「先红冲后退款」。</p>'+
      '<p style="margin-top:6px"><b>退款状态（现网 5 值）与流转：</b>待审核 →（审核通过）<b>退款中</b> → <b>退款成功</b> / <b>退款失败</b>；（审核驳回）<b>已驳回</b>。「退款失败」两种成因：①<b>红冲失败</b>——不退款，退款单置「退款失败」，线下抵扣处理完成后重新发起退款申请，再次审核通过时触发红冲；②<b>资金流退回失败</b>（红冲已成功）——退款单置「退款失败」，处理资金侧问题后重新发起退款申请，<b>再次审核通过时红冲自动通过</b>（原蓝票已冲销、不重复红冲），直接走易宝资金流退款。</p>'+
      tbl(['退款审核后的三种结果','提示口径','后续动作'],[
        ['红冲成功 + 退款成功','红冲成功，原蓝票已冲销；商品本金与服务费原路退回成功','退款单完成，订单开票状态=已红冲'],
        ['红冲成功 + 资金退回失败','红冲成功，但资金转账失败','退款状态置「退款失败」，处理资金侧问题后重新发起退款申请'],
        ['红冲失败 + 退款失败','红冲失败：展示乐企返回的失败原因；退款状态<b>置「退款失败」</b>','线下抵扣处理完成后<b>重新发起退款申请</b>再走审核；再次审核通过时触发红冲']
      ])));
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
    ((o.invCh||'线下')==='乐企'?liveSection('开票信息（乐企）',[
      ['开票渠道','<span class="tag f">乐企</span>'],['开票状态',liveBadge(o.invoice)],
      ...(o.invFail?[['失败原因','<span style="color:var(--bad)">'+o.invFail+'</span>']]:[]),
      ['开票规则','易宝支付成功即自动开票，一单一票；红冲触发=退款审核通过（先红冲后退款）或运营手动红冲']
    ]):[])+
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
  if((o.invCh||'线下')==='乐企'){
    return liveHead(o.no,o.time,o.invoice,o.amount,'能源订单金额')+
      '<div class="card"><div class="card-b">'+leqiOrderInvHTML({no:o.no,inv:o.invoice,invCh:'乐企',invFail:o.invFail,stationCo:o.stationCo,cust:o.customer})+'</div></div>';
  }
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
    '<div class="oms-fee-two-col">'+liveSection('收付双方信息',[
      ['支付方',f.payer],['支付方名称',f.payerName],['服务费收款方','万联易达'],['支付状态',f.payment]
    ])+
    liveSection('关联订单信息',[
      ['发生时间',f.time],['关联加油订单',f.order],['关联客户',f.customer],['关联油站',f.station],
      ['加油金额',liveMoney(f.oilAmount)],['费率',f.rate],
      ['能源订单开票状态',f.energyInvoice],['能源发票申请单号',f.energyApply]
    ])+'</div>'+
    liveSection('发票基本信息',f.feeApply!=='—'?[
      ['申请单号',f.feeApply],['服务费开票状态',f.invoice],['开票方','万联易达'],['受票方',f.payerName],['税率','6%']
    ]:[['服务费开票状态',f.invoice],['发票信息','暂无发票信息']]);
}
/* ---- 关键字段点击说明（2026-10-21 按更新后的角色改版，与 PRD 7.2.2 同源）----
   处理进度（乐企：先红冲后退款）进度线的 4 个节点逐节点挂「？」：
   提交退款申请 / 退款审核 / 红冲原蓝票（乐企）/ 资金退回——每张卡片按状态直接展开：
   节点状态穷举 + 每个状态的圆点图标 + 页面展示内容（示例沿用页面既有展示格式）+ 逻辑说明简要；
   交互=点击「？」显示、点击弹层以外任意区域关闭；节点文案逐字同 liveRefundRedBlock，两处必须一起改 */
function fhHelp(card, up){
  /* 组件与点击监听统一在 index.html 基础层 fhCardHTML（两套皮肤共用同一套 fh 说明卡） */
  return fhCardHTML(card, up);
}
function liveNodeHelp(k, up){
  const dot=c=>'<span class="fh-dot'+(c?' '+c:'')+'"></span>';
  if(k==='submit') return fhHelp(
    '<h5>节点状态 · 提交退款申请（穷举）</h5>'
    +tbl(['节点状态','圆点','页面展示内容（示例）'],[
      ['已提交',dot(''),'「2026-08-27 10:12:00」（展示申请时间）']
    ])
    +'<p><b>出现条件：</b>油站或运营核实问题后代为发起；仅待核销一键支付订单的整单全额退款。</p>'
    +'<p><b>关键规则：</b>开票终态（未开票 / 开票失败 / 开票成功 / 红冲失败 / 已红冲）可发起退款；开票中 / 红冲中为进行中状态、退款入口置灰；申请处理中暂停核销与新开票。</p>'
    +'<p class="mut">与 PRD 7.2.2 同源。</p>');
  if(k==='audit') return fhHelp(
    '<h5>节点状态 · 退款审核（穷举）</h5>'
    +tbl(['节点状态','圆点','页面展示内容（示例）'],[
      ['待审核',dot('pend'),'「待审核——审核通过后触发红冲」'],
      ['审核通过',dot(''),'「2026-09-12 13:20 · 张世民（运营中台） · 审核通过」'],
      ['已拒绝',dot('fail'),'「2026-09-12 16:01 · 张世民（运营中台） · 已拒绝——退款申请终止」']
    ])
    +'<p><b>由谁处理：</b>运营（审核抽屉内「通过并退款 / 拒绝退款」）。</p>'
    +'<p><b>后续流转：</b>通过 → 乐企订单先红冲原蓝票，红冲成功后执行退款（线下订单直接执行退款）；拒绝 → 退款单终态「已拒绝」，订单恢复原待核销状态。</p>'
    +'<p><b>关键规则：</b>订单开票状态=红冲中时点「通过并退款」→ 拦截，提示「红冲进行中，暂不能通过审核」。</p>'
    +'<p class="mut">与 PRD 7.2.2 同源。</p>');
  if(k==='red') return fhHelp(
    '<h5>本节点何时出现</h5>'
    +'<p>仅开票渠道=<b>乐企</b>且蓝票<b>开票成功未红冲</b>（含红冲失败重开后再次审核通过）的退款单；线下渠道订单无本节点、不显示本区块。</p>'
    +'<h5>节点状态 · 红冲原蓝票（穷举 4 态）</h5>'
    +tbl(['节点状态','圆点','页面展示内容（示例）'],[
      ['未触发',dot('pend'),'未到本环节——不展示小字（仅节点标题）'],
      ['红冲中',dot('run'),'「红冲中——红冲结果查询中，红冲成功后才执行退款」'],
      ['已红冲',dot(''),'「已红冲——原蓝票冲销，继续执行退款」'],
      ['红冲失败',dot('fail'),'「红冲失败：购方已认证抵扣，需线下沟通抵扣处理——审批单保持「审核通过」、订单扣款状态置「退款失败」，线下抵扣处理完成后重新发起退款申请」']
    ])
    +'<p><b>关键规则：</b>① 红冲唯一触发点=退款审核通过（订单列表「手动红冲」为独立换开入口，不影响退款流程）；② 红冲中拦截审核；③ 线下渠道不拦截、不联动。</p>'
    +'<p class="mut">与 PRD 7.2.2 同源。</p>');
  return fhHelp(
    '<h5>节点状态 · 资金退回（穷举）</h5>'
    +'<p class="mut" style="margin:0 0 4px">未到本环节（审核未通过 / 已拒绝 / 红冲中 / 红冲失败终止）不展示小字，仅节点标题。</p>'
    +tbl(['节点状态','圆点','页面展示内容（示例）'],[
      ['执行中',dot('run'),'「两笔转账执行中，各自成功各自失败」'],
      ['商品本金与服务费已原路退回',dot(''),'「商品本金与服务费已原路退回」（退款单「退款成功」）'],
      ['退款失败（资金流退回失败）',dot('fail'),'「红冲成功，但资金转账失败——审批单保持「审核通过」、订单扣款状态置「退款失败」，需重新发起退款申请」']
    ])
    +'<p><b>关键规则：</b>商品本金与服务费为两笔独立转账，各自成功各自失败。<b>两种「退款失败」</b>：①红冲失败——线下抵扣处理完成后重新发起退款申请，审核通过后再次触发红冲；②资金流退回失败——处理资金侧问题后重新发起退款申请，<b>审核通过时红冲自动通过</b>（原蓝票已冲销、不重复红冲），直接走易宝资金流退款。退款成功后订单开票状态=已红冲。</p>'
    +'<p class="mut">与 PRD 7.2.2 同源。</p>', up);
}
function liveRefundRedBlock(r){
  const o=LIVE.orders.find(x=>x.no===r.order);
  if(!o||(o.invCh||'线下')!=='乐企') return '';
  const failed=r.status==='退款失败';
  const redFail=o.invoice==='红冲失败'||(r.redResult==='红冲失败'&&failed);
  const redDone=o.invoice==='已红冲';
  const redDoing=o.invoice==='红冲中';
  const started=r.status!=='待审核'&&r.status!=='已驳回'; /* 流程已过审核——后续环节才可能开始 */
  /* 展示口径：未到达的环节只显示节点标题、不显示小字；小字=已到达环节的具体状态（审核通过由后续环节状态推导写入） */
  const auditMsg=r.status==='待审核'?'待审核——审核通过后触发红冲'
    :r.status==='已驳回'?((r.auditAt||'—')+' · '+(r.auditBy||'—')+' · 已驳回——退款申请终止')
    :((r.auditAt||r.time)+' · '+(r.auditBy||'运营中台')+' · 审核通过');
  const redMsg=!started?''
    :redFail?'红冲失败：'+(r.redFail||o.invFail||'乐企红冲接口失败')+'——退款单置「退款失败」，线下抵扣处理完成后重新发起退款申请'
    :redDoing?'红冲中——红冲结果查询中，红冲成功后才执行退款'
    :redDone?'已红冲——原蓝票冲销，继续执行退款'
    :'';
  const fundMsg=!started?''
    :redFail?'不执行退款——红冲失败拦截，重新发起退款申请通过后再退'
    :(r.fundFail&&!redFail)?('红冲成功，但资金转账失败'+(r.fundFail?'（'+r.fundFail+'）':'')+'——退款单置「退款失败」，处理资金侧问题后重新发起退款申请；再次审核通过时红冲自动通过，直接走易宝资金流退款')
    :r.status==='退款成功'?'商品本金与服务费已原路退回'
    :r.status==='退款中'?'两笔转账执行中，各自成功各自失败'
    :'';
  return '<div class="card"><div class="card-b"><div class="sec-title">处理进度（乐企：先红冲后退款）</div><div class="tl" style="margin-top:10px">'+
    '<div class="it"><span class="dot"></span><div><div class="h">提交退款申请'+liveNodeHelp('submit')+'</div><div class="m">'+r.time+'</div></div></div>'+
    '<div class="it"><span class="dot '+(r.status==='待审核'?'pend':'')+'"></span><div><div class="h">退款审核'+liveNodeHelp('audit')+'</div><div class="m">'+auditMsg+'</div></div></div>'+
    '<div class="it"><span class="dot '+((redFail||redDone||redDoing)?'':'pend')+'"'+(redFail?' style="background:var(--bad)"':'')+'></span><div><div class="h">红冲原蓝票（乐企）'+liveNodeHelp('red')+'</div>'+(redMsg?'<div class="m">'+redMsg+'</div>':'')+'</div></div>'+
    '<div class="it"><span class="dot '+(r.status==='退款成功'?'':(failed?'':'pend'))+'"></span><div><div class="h">资金退回'+liveNodeHelp('refund', true)+'</div>'+(fundMsg?'<div class="m">'+fundMsg+'</div>':'')+'</div></div>'+
    '</div></div></div>';
}

/* 退款详情「发票」行：线下按既有口径；乐企把红冲结果直接写在这一行（退款失败时能看到红冲内容） */
function liveRefundInvoiceLine(r){
  const o=LIVE.orders.find(x=>x.no===r.order)||{};
  if((o.invCh||'线下')!=='乐企') return '禁止继续开票；已开票进入红冲/作废';
  const blue=(LIVE.orders.find(x=>x.no===r.order)||{});
  const failed=r.status==='退款失败';
  const redFail=(r.redResult==='红冲失败'&&failed)||o.invoice==='红冲失败';
  const redDone=o.invoice==='已红冲';
  const redDoing=o.invoice==='红冲中';
  const tail=redFail?('<span style="color:var(--bad)">乐企红冲失败：'+(r.redFail||o.invFail||'乐企红冲接口失败')+'</span>')
    :redDone?'乐企原蓝票已红冲（红票已开具）'
    :redDoing?'乐企红冲中（结果查询中）'
    :(r.status==='待审核'?'乐企：审核通过后先红冲原蓝票':'—');
  return '乐企渠道：禁止继续开票；'+tail;
}
function liveRefundDetail(r,audit){
  return liveHead(r.no,'原订单：'+r.order,r.status,r.amount,'退款金额')+
    liveRefundRedBlock(r)+
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
      ['发票',liveRefundInvoiceLine(r)]
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
  const item=(label,value)=>'<div class="oms-detail-item"><div class="oms-detail-label">'+label+'</div><div class="oms-detail-value">'+value+'</div></div>';
  return '<div class="oms-withdraw-sheet"><div class="oms-withdraw-hero"><div class="oms-sw-icon">SW</div><div class="oms-withdraw-ident"><h3>'+w.no+'</h3><p>'+w.company+' · 油站端申请</p></div><div class="oms-withdraw-amount"><b>'+liveMoney(w.amount)+'</b><span>提现金额</span></div></div>'+
    '<section class="oms-detail-section"><h4>提现信息</h4><div class="oms-detail-grid">'+
    item('提现账户',w.account)+item('账户类型 / 能源',w.accountName+' · '+w.energy)+
    item('提现人',w.person+' · '+w.phone)+item('当前状态','<span class="oms-state">'+w.status+'</span>')+
    item('提现时间',w.time)+item('完成时间',w.finish)+item('三方交易流水',w.third)+
    '</div></section><section class="oms-detail-section"><h4>到账银行卡</h4><div class="oms-bank-card"><div>'+w.bank+' <span>对公结算账户</span></div><strong>'+w.bankCard+'</strong><small>开户支行　招商银行股份有限公司示例分行</small></div></section>'+
    '<section class="oms-detail-section"><h4>处理进度</h4><div class="tl"><div class="it"><span class="dot"></span><div><div class="h">提现申请已提交</div><div class="m">'+w.time+'</div></div></div><div class="it"><span class="dot"></span><div><div class="h">三方支付通道已受理</div></div></div><div class="it"><span class="dot '+(w.status==='提现成功'?'':'fail')+'"></span><div><div class="h">'+w.status+'</div><div class="m">'+w.finish+'</div></div></div></div></section></div>';
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
  drawer.dataset.kind=kind;
  const nav=document.getElementById('drawerNav'),main=document.getElementById('drawerMain');
  document.getElementById('drawerTitle').innerHTML=titles[kind]+(kind==='withdraw'?'<small>油站资金管理</small>':'');
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
  let heading='',content='',primary='确认',requireField=false,okCls='';
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
  }else if(kind==='wbBack'||kind==='wbBackBatch'){
    heading=kind==='wbBack'?'能源圈回':'批量能源圈回';
    content=kind==='wbBack'
      ?'<p>确认圈回运单 <b class="mono">'+key+'</b> 的可用额度吗？圈回金额按该运单的<b>能源类型</b>计入对应账户（油气 / 电）。</p><p class="note">圈回后额度记「已圈回额度」，司机可用额度相应减少；能源类型=电写入电变更日志，油气写入能源变更日志。</p>'
      :'<p>请先在列表勾选需要圈回的运单，圈回金额按各运单的<b>能源类型</b>分别计入油气 / 电账户。</p><p class="note">圈回的额度记「已圈回额度」并写入对应变更日志（油气 / 电）。</p>';
    primary='确认圈回';
  }else if(kind==='oilRecover'||kind==='elecRecover'){
    const elec=kind==='elecRecover';
    heading=elec?'回收电额度':'回收油气额度';
    content='<p>该操作会将该司机的当前所有'+(elec?'<b>电</b>':'<b>油气</b>')+'额度转成运费，确认回收吗？</p>'
      +(elec?'<p class="note">只圈回当前可使用的电额度；司机名下有充电中订单时不拦截，冻结部分不受影响。回收金额记「圈回」，写入能源变更日志（能源类型=电）。</p>'
            :'<p class="note">回收金额记「圈回」，写入能源变更日志（能源类型=油气）。</p>');
    primary='确认回收';
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
  }else if(kind==='leqiInvoice'){
    const o=LIVE.orders.find(x=>x.no===key);
    if(!o||!liveLeqiCanInvoice(o)){showToast('仅「未开票/开票失败/已红冲」的乐企订单可手动开票');return;}
    heading='乐企手动开票';
    /* 交互与订单中心（MODALS.leqiInvoice）一致：banner 警示条 + 核对信息 cf-kv + 确认前请知悉 cf-list，文案逐字同源 */
    content='<div class="banner warn"><div><p class="cf-lead">将对订单 <b class="mono">'+o.no+'</b> 调用乐企发票开具接口，订单开票状态置为「开票中」，开具结果查询后更新。</p></div></div>'+
      '<div><div class="sec-title">核对信息</div><dl class="cf-kv" style="margin-top:10px">'+
      '<dt>订单号</dt><dd><span class="mono">'+o.no+'</span></dd>'+
      '<dt>开票渠道</dt><dd><span class="tag f">乐企</span></dd>'+
      '<dt>当前开票状态</dt><dd>'+liveBadge(o.invoice)+'</dd>'+
      (o.invFail?'<dt>失败原因</dt><dd><span style="color:var(--bad)">'+o.invFail+'</span></dd>':'')+
      '<dt>销方（油站企业）</dt><dd>'+o.stationCo+'</dd>'+
      '<dt>购方</dt><dd>'+o.customer+'</dd>'+
      '<dt>金额</dt><dd>'+liveMoney(o.amount)+'</dd></dl></div>'+
      '<div><div class="sec-title">确认前请知悉</div><ul class="cf-list" style="margin-top:8px"><li>可用状态：未开票 / 开票失败 / 已红冲。</li><li>已红冲订单重开蓝票：用于换开等需要再次开票的场景，红冲完成后即可发起。</li></ul></div>';
    primary='确认开票';
  }else if(kind==='leqiRed'){
    const o=LIVE.orders.find(x=>x.no===key);
    if(!o||!liveLeqiCanRed(o)){showToast('仅「开票成功/红冲失败」的乐企订单可手动红冲');return;}
    const blue=leqiLatestInv(o.no);
    heading='乐企手动红冲';
    /* 交互与订单中心（MODALS.leqiRed）一致：banner 警示条 + 核对信息 cf-kv + 红冲原因必填 + 确认前请知悉 cf-list，文案逐字同源 */
    content='<div class="banner warn"><div><p class="cf-lead">将对订单 <b class="mono">'+o.no+'</b> 当前开票成功的蓝票调用乐企发票冲红接口，订单开票状态置为「红冲中」，红冲结果查询后更新。</p></div></div>'+
      '<div><div class="sec-title">核对信息</div><dl class="cf-kv" style="margin-top:10px">'+
      '<dt>订单号</dt><dd><span class="mono">'+o.no+'</span></dd>'+
      '<dt>开票渠道</dt><dd><span class="tag f">乐企</span></dd>'+
      '<dt>当前开票状态</dt><dd>'+liveBadge(o.invoice)+'</dd>'+
      '<dt>原蓝票号码</dt><dd>'+(blue?'<span class="mono">'+blue.no+'</span>':'—')+'</dd>'+
      '<dt>销方（油站企业）</dt><dd>'+o.stationCo+'</dd>'+
      '<dt>购方</dt><dd>'+o.customer+'</dd>'+
      '<dt>金额</dt><dd>'+liveMoney(o.amount)+'</dd></dl></div>'+
      '<div class="fi"><label for="live-modal-reason">红冲原因 <span class="req">*</span></label><textarea id="live-modal-reason" class="inp" maxlength="200" minlength="5" placeholder="必填，5–200 字，写入开票记录留痕（如：开票信息有误需换开 / 购方要求重开…）"></textarea><span class="t2">5–200 字</span></div>'+
      '<div><div class="sec-title">确认前请知悉</div><ul class="cf-list" style="margin-top:8px"><li>可用状态：开票成功 / 红冲失败（重发）。</li><li>红冲成功后原蓝票冲销，订单开票状态置「已红冲」，可再次手动开票重开蓝票；红冲失败展示乐企原因，可重新发起；红冲中拦截退款审核。</li></ul></div>';
    primary='确认红冲';requireField=true;okCls=' danger';
  }else if(kind==='oilCap'||kind==='elecCap'){
    const elec=kind==='elecCap';
    heading=elec?'分电上限比例配置':'分油上限比例配置';
    content='<div class="fi"><label for="live-cap">'+(elec?'分电上限比例':'分油上限比例')+' <span class="req">*</span></label>'
      +'<div class="fi-c"><input id="live-cap" class="inp" inputmode="decimal" value="'+(elec?liveCapElec.toFixed(2):liveCapOil.toFixed(2))+'" placeholder="请输入0-40之间的数字" style="max-width:200px"><span class="unit">%</span></div>'
      +'<span class="t2">0–40，最多两位小数；'+(elec?'电规则派发比例按此上限校验':'油气规则派发比例按此上限校验')+'</span></div>';
    primary='确认';
  }else if(kind==='leqiDownload'){
    const nos=liveSelected('.live-order-check').map(no=>LIVE.orders.find(x=>x.no===no)).filter(o=>o&&(o.invCh||'线下')==='乐企'&&(o.invoice==='开票成功'||o.invoice==='已红冲'));
    if(!nos.length){showToast('请先勾选「开票成功/已红冲」的乐企订单');return;}
    heading='批量下载发票';
    content='<p>将下载所选 <b>'+nos.length+'</b> 笔订单各自<b>最新 1 次</b>开具的发票（不限格式 url/pdf/ofd）。</p>'+
      liveTable(['订单号','开票状态'],nos.map(o=>'<tr><td class="mono">'+o.no+'</td><td>'+liveBadge(o.invoice)+'</td></tr>'),'700px')+
      '<p class="note">非「开票成功/已红冲」的勾选订单自动跳过；任务提交后在下载中心获取。</p>';
    primary='开始下载';
  }else if(kind==='backfillSubmit'){
    heading='确认提交撮合订单补单';
    content='<p>请核对订单资料和支付金额。提交后会进入支付执行。</p>';
    primary='确认提交';
  }else if(kind==='cgRecover'){
    const o=LIVE.chargeOrders.find(x=>x.no===key);
    if(!o||o.recover!=='未追回'){showToast('仅「未追回」的订单可执行追回');return;}
    heading='追回操作';
    content='<dl class="cf-kv" style="margin-top:2px">'
      +'<dt>能源订单号</dt><dd><span class="mono">'+o.no+'</span></dd>'
      +'<dt>关联运单号</dt><dd><span class="mono">'+o.waybill+'</span></dd>'
      +'<dt>司机姓名</dt><dd>'+o.driver+'</dd>'
      +'<dt>订单金额</dt><dd class="num">'+cgMoney(o.orderAmt)+'</dd></dl>'
      +'<div class="fi" style="margin-top:14px"><label style="display:flex;align-items:center;gap:8px;font-weight:400;cursor:pointer"><input type="checkbox" id="live-rec-resume" onchange="cgRecoverToggle(this.checked)">恢复正常支付</label>'
      +'<span class="t2">勾选＝该订单无需追回（运单已恢复正常支付），追回凭证转为选填；提交后「是否追回」置为「恢复正常支付」</span></div>'
      +'<div class="fi" style="margin-top:10px"><label for="live-rec-files">追回凭证 <span class="req" id="live-rec-req">*</span></label>'
      +'<input id="live-rec-files" class="inp" type="file" accept=".jpg,.jpeg,.png" multiple onchange="cgRecoverFiles(this)">'
      +'<span class="t2">最多 5 张图片，图片格式为 jpg / png / jpeg，单张 ≤5MB；勾选「恢复正常支付」后选填</span>'
      +'<div id="live-rec-files-tip" style="margin-top:4px"></div></div>'
      +'<div class="fi" style="margin-top:10px"><label for="live-modal-reason">追回备注</label>'
      +'<textarea id="live-modal-reason" class="inp" rows="3" maxlength="200" placeholder="请输入追回备注" style="min-height:76px"></textarea>'
      +'<span class="t2">0–200 字，选填</span></div>';
    primary='确认提交';
  }else if(kind==='cgRecoverView'){
    const o=LIVE.chargeOrders.find(x=>x.no===key);
    if(!o||(o.recover!=='已追回'&&o.recover!=='恢复正常支付')){showToast('该订单暂无追回记录');return;}
    const rec=LIVE.chargeRecovers[key]||{};
    const imgs=(rec.files||0)
      ?Array.from({length:rec.files},(_,i)=>'<img src="'+cgProofImg(o.no,money(o.orderAmt),rec.time||'')+'" alt="追回凭证 '+(i+1)+'" style="width:104px;height:70px;object-fit:cover;border:1px solid var(--line);border-radius:8px">').join('')
      :'<span class="t2">--</span>';
    const remark=rec.remark||(rec.resume?'恢复正常支付':'')||'--';
    heading='查看追回';
    content='<dl class="cf-kv" style="margin-top:2px">'
      +'<dt>能源订单号</dt><dd><span class="mono">'+o.no+'</span></dd>'
      +'<dt>关联运单号</dt><dd><span class="mono">'+o.waybill+'</span></dd>'
      +'<dt>司机姓名</dt><dd>'+o.driver+'</dd>'
      +'<dt>订单金额</dt><dd class="num">'+cgMoney(o.orderAmt)+'</dd></dl>'
      +(rec.resume?'<div style="margin-top:12px;padding:8px 12px;border-radius:8px;background:var(--surface-2);border:1px solid var(--line);font-size:13px;color:var(--ink-2)">恢复正常支付</div>':'')
      +'<div class="sec-title" style="margin-top:14px">追回凭证</div><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px">'+imgs+'</div>'
      +'<div class="sec-title" style="margin-top:14px">追回备注</div><p style="margin-top:4px;font-size:13px">'+remark+'</p>'
      +'<div class="sec-title" style="margin-top:14px">操作记录</div>'
      +tbl(['序号','操作动作','操作人','操作时间','备注'],[['1',rec.opr||'新增',rec.by||'—',rec.time||'—',rec.remark||'—']]);
    primary='关闭';
  }
  title.textContent=heading;
  body.innerHTML=content;
  foot.innerHTML=close+'<button class="btn'+(okCls||' primary')+'" type="button" onclick="liveFinish(\''+kind+'\',\''+(key||'')+'\','+requireField+')">'+primary+'</button>';
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
  if(kind==='cgRecoverView'){ return; }
  if(kind==='cgRecover'&&key){
    const o=LIVE.chargeOrders.find(x=>x.no===key);
    if(!o) return;
    const resume=!!(document.getElementById('live-rec-resume')||{}).checked;
    const inp=document.getElementById('live-rec-files');
    const files=[...((inp&&inp.files)||[])];
    if(!resume){
      if(!files.length){modal.classList.add('on');inp&&inp.focus();showToast('请上传追回凭证');return;}
      if(files.length>5){modal.classList.add('on');inp&&inp.focus();showToast('追回凭证最多上传 5 张');return;}
      if(files.some(f=>f.size>5*1024*1024)){modal.classList.add('on');inp&&inp.focus();showToast('单张追回凭证需小于 5MB');return;}
    }
    const rm=document.getElementById('live-modal-reason');
    const remark=rm?rm.value.trim():'';
    o.recover=resume?'恢复正常支付':'已追回';
    LIVE.chargeRecovers[o.no]={resume:!!resume, opr:resume?'恢复正常支付':'新增', by:'张世民（运营中台）', time:leqiNow(), remark:remark, files:resume?0:files.length};
    showToast('追回操作提交成功');
    paint();
    return;
  }
  if(kind==='oilCap'||kind==='elecCap'){
    const el=document.getElementById('live-cap');
    const v=String(el&&el.value||'').trim();
    if(!/^\d{1,2}(\.\d{1,2})?$/.test(v)||Number(v)>40){modal.classList.add('on');el&&el.focus();showToast('请输入 0–40 之间的数字（最多两位小数）');return;}
    if(kind==='elecCap') liveCapElec=Number(v); else liveCapOil=Number(v);
    showToast((kind==='elecCap'?'分电':'分油')+'上限比例已保存为 '+Number(v).toFixed(2)+'%（演示）'); paint(); return;
  }
  if(kind==='leqiInvoice'&&key){
    const o=LIVE.orders.find(x=>x.no===key);
    if(o){o.invoice='开票中';o.invFail='';LEQI_LOGS.push({order:o.no,t:leqiNow(),way:'手动开票',act:'发票开具',result:'处理中',note:'已提交乐企，开具结果查询中'});showToast('已发起乐企开票，订单开票状态置为「开票中」');paint();return;}
  }
  if(kind==='leqiRed'&&key){
    const o=LIVE.orders.find(x=>x.no===key);
    if(o){
      const rs=document.getElementById('live-modal-reason');
      const reason=rs?rs.value.trim():'';
      if(reason.length<5||reason.length>200){modal.classList.add('on');rs&&rs.focus();showToast('请填写红冲原因（5–200 字）');return;}
      const blue=leqiLatestInv(o.no);
      const failDemo=o.no==='MH20260827094500000001'&&!o._redFailedDemo;
      if(failDemo)o._redFailedDemo=true;
      o.invoice='红冲中';
      LEQI_LOGS.push({order:o.no,t:leqiNow(),way:'手动红冲',act:'发票冲红',result:'处理中',note:'红冲原因：'+reason+'；已提交乐企，红冲结果查询中'});
      showToast('已发起红冲，订单开票状态置为「红冲中」，红冲结果查询中');
      paint();
      setTimeout(function(){
        if(failDemo){
          o.invoice='红冲失败';o.invFail='购方已认证抵扣，需线下沟通抵扣处理';
          LEQI_LOGS.push({order:o.no,t:leqiNow(),way:'手动红冲',act:'发票冲红',result:'失败',note:o.invFail+'；可重新发起手动红冲'});
          showToast('红冲失败：'+o.invFail);
        }else{
          o.invoice='已红冲';o.invFail='';
          LEQI_INV.push({no:'0441202608270000'+String(1340+LEQI_INV.length).padStart(4,'0'),order:o.no,biz:'撮合',type:'红票',
            rel:blue?blue.no:'—',drawer:o.stationCo,buyer:o.customer,amt:-o.amount,t:leqiNow(),trigger:'手动红冲',
            file:'乐企发票_红冲_'+o.no+'.pdf'});
          LEQI_LOGS.push({order:o.no,t:leqiNow(),way:'手动红冲',act:'发票冲红',result:'成功',note:'红冲原因：'+reason+'；红冲成功，原蓝票已冲销，可再次手动开票'});
          showToast('红冲成功，原蓝票已冲销；可对订单再次手动开票');
        }
        paint();
      },900);
      return;
    }
  }
  if(kind==='refundApprove'&&key){ liveRefundApprove(key); return; }
  if(kind==='refundReject'&&key){
    const r=LIVE.refunds.find(x=>x.no===key);
    if(r){r.status='已拒绝';r.auditBy='张世民（运营中台）';r.auditAt=leqiNow();showToast('已拒绝退款申请，订单恢复原待核销状态');paint();return;}
  }
  showToast('原型演示：'+(kind.includes('Download')?'下载任务已提交':'操作已确认'));
}
/* 乐企退款审核通过：红冲前置三态（演示结果由退款单 redResult 预置） */
function liveRefundApprove(no){
  const r=LIVE.refunds.find(x=>x.no===no); if(!r) return;
  const o=LIVE.orders.find(x=>x.no===r.order);
  if(o&&(o.invCh||'线下')==='乐企'){
    if(o.invoice==='红冲中'){showToast('红冲进行中，暂不能通过审核');return;}
    r.auditBy='张世民（运营中台）';r.auditAt=leqiNow();
    if(o.invoice==='开票成功'||o.invoice==='红冲失败'){
      if(r.redResult==='红冲失败'){
        r.status='退款失败';r.redFail=r.redFail||'乐企红冲接口失败';
        o.invoice='红冲失败';o.invFail=r.redFail;
        LEQI_LOGS.push({order:o.no,t:leqiNow(),way:'退款红冲',act:'发票冲红',result:'失败',note:r.redFail+'；审批单保持「审核通过」、订单扣款状态置「退款失败」'});
        showToast('退款失败：红冲失败——'+r.redFail);paint();return;
      }
      o.invoice='已红冲';
      const blue=leqiInvOfOrder(o.no).find(i=>i.type==='蓝票');
      LEQI_INV.push({no:'0441202608270000'+String(1320+LEQI_INV.length).padStart(4,'0'),order:o.no,biz:'撮合',type:'红票',
        rel:blue?blue.no:'—',drawer:o.stationCo,buyer:o.customer,amt:-o.amount,t:leqiNow(),trigger:'退款红冲',
        file:'乐企发票_红冲_'+o.no+'.pdf'});
      LEQI_LOGS.push({order:o.no,t:leqiNow(),way:'退款红冲',act:'发票冲红',result:'成功',note:'红冲成功，原蓝票已冲销'});
      r.status='退款成功';r.inv='开票成功 · 已红冲';
      showToast('红冲成功，退款成功');paint();return;
    }
  }
  r.auditBy='张世民（运营中台）';r.auditAt=leqiNow();
  r.status='退款成功';
  showToast('审核通过，退款执行成功');paint();
}

/* ================= 4PL 端 · 充电订单管理 ================= */
/* 订单状态徽标色：充电中=进行蓝、充电结束/待支付=待办橙、已支付=成功绿、已退款=灰 */
const cgStatusBadge = s=>({'充电中':'<span class="tag f">充电中</span>','充电结束':'<span class="tag warn">充电结束</span>','待支付':'<span class="tag warn">待支付</span>','已支付':'<span class="tag ok">已支付</span>','已退款':'<span class="tag">已退款</span>'}[s]||s);
const cgMoney = n=>n===0?'¥0.00':'¥'+money(n);
const cgDeductBadge = s=>s==='已扣减'?'<span class="tag ok">已扣减</span>':s==='部分扣减'?'<span class="tag warn">部分扣减</span>':'<span class="tag">未扣减</span>';
/* 是否追回徽标：未追回=待处理橙、已追回=闭环绿、恢复正常支付=无需追回灰（与油气能源订单一致） */
const cgRecoverBadge = s=>s==='已追回'?'<span class="tag ok">已追回</span>':s==='恢复正常支付'?'<span class="tag">恢复正常支付</span>':s==='未追回'?'<span class="tag warn">未追回</span>':'<span class="tag">'+(s||'未追回')+'</span>';
/* 追回凭证演示图（内联 SVG 转账回单，不依赖外部图片） */
function cgProofImg(no, amount, time){
  const svg='<svg xmlns="http://www.w3.org/2000/svg" width="240" height="160" viewBox="0 0 240 160"><rect width="240" height="160" fill="#eef3fb"/><rect x="9" y="9" width="222" height="142" rx="9" fill="#fff" stroke="#d7e1f0"/><text x="20" y="34" font-size="13" font-family="sans-serif" fill="#225bb5">转账回单（演示）</text><text x="20" y="60" font-size="10.5" font-family="sans-serif" fill="#5b6475">能源订单号：'+no+'</text><text x="20" y="80" font-size="10.5" font-family="sans-serif" fill="#5b6475">追回金额：¥'+amount+'</text><text x="20" y="100" font-size="10.5" font-family="sans-serif" fill="#5b6475">回单时间：'+time+'</text><text x="20" y="132" font-size="9.5" font-family="sans-serif" fill="#8992a4">原型演示占位图，非真实凭证</text></svg>';
  return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}
/* 追回弹窗：勾选「恢复正常支付」后追回凭证由必填转选填 */
function cgRecoverToggle(checked){
  const req=document.getElementById('live-rec-req');
  if(req) req.style.display=checked?'none':'';
  const tip=document.getElementById('live-rec-files-tip');
  if(tip&&checked) tip.innerHTML='';
}
/* 追回弹窗：凭证选择回显与数量/大小提示（校验仍以提交时为准） */
function cgRecoverFiles(input){
  const tip=document.getElementById('live-rec-files-tip');
  if(!tip) return;
  const files=[...(input.files||[])];
  if(!files.length){tip.innerHTML='';return;}
  const tooMany=files.length>5;
  const tooBig=files.filter(f=>f.size>5*1024*1024).map(f=>f.name);
  tip.innerHTML=(tooMany?'<span style="color:var(--bad);font-size:12px">最多上传 5 张，当前已选 '+files.length+' 张</span> ':'')
    +(tooBig.length?'<span style="color:var(--bad);font-size:12px">超出 5MB：'+tooBig.join('、')+'</span> ':'')
    +'<span class="t2">已选 '+files.length+' 张：'+files.map(f=>f.name).join('、')+'</span>';
}

VIEWS.chargeOrders=()=>{
  const list=liveRows('chargeOrders');
  const rows=list.map(o=>'<tr>'
    +'<td><b class="mono">'+o.no+'</b></td>'
    +'<td class="mono">'+o.ckcNo+'</td>'
    +'<td class="mono">'+o.waybill+'</td>'
    +'<td>'+o.driver+'</td>'
    +'<td class="mono">'+o.phone+'</td>'
    +'<td class="mono">'+o.plate+'</td>'
    +'<td>'+cgStatusBadge(o.status)+leqiFieldHelp('cgStatus')+'</td>'
    +'<td>'+o.operator+'</td>'
    +'<td>'+o.station+'<div class="t2">'+o.pile+'</div></td>'
    +'<td class="mono">'+(o.startTime||'—')+'</td>'
    +'<td class="num">'+(o.kwh?o.kwh.toFixed(2):'—')+'</td>'
    +'<td class="num">'+cgMoney(o.orderAmt)+'</td>'
    +'<td class="num" style="white-space:nowrap">'+o.wlj.toFixed(2)+' 元/度'+leqiFieldHelp('cgWlj')+'</td>'
    +'<td class="num">'+cgMoney(o.subsidy)+leqiFieldHelp('cgSubsidy')+'</td>'
    +'<td class="num">'+cgMoney(o.payAmt)+leqiFieldHelp('cgPayAmt')+'</td>'
    +'<td>'+o.shipper+'</td>'
    +'<td>'+o.whSubj+'</td>'
    +'<td>'+o.belongCo+'</td>'
    +'<td>'+o.settleSubj+'</td>'
    +'<td style="min-width:160px">'+(o.fromAddr||'—')+'</td>'
    +'<td style="min-width:160px">'+(o.toAddr||'—')+'</td>'
    +'<td>'+(o.waybillPay==='已支付'?'<span class="tag ok">已支付</span>':'<span class="tag warn">未付款</span>')+'</td>'
    +'<td>'+(o.waybillAbn==='无异常'?'<span class="t2">无异常</span>':'<span style="color:#c0483c">'+o.waybillAbn+'</span>')+'</td>'
    +'<td class="mono">'+(o.abnTime||'—')+'</td>'
    +'<td>'+cgRecoverBadge(o.recover)+'</td>'
    +'<td>'+(o.ocr==='通过'?'<span class="tag ok">通过</span>':'<span class="tag warn">未通过</span>')+'</td>'
    +'<td class="acts"><button type="button" onclick="openChargeOrder(\''+o.no+'\')">详情</button>'
      +(o.recover==='未追回'?'<button type="button" onclick="liveModal(\'cgRecover\',\''+o.no+'\')">追回</button>':'')
      +((o.recover==='已追回'||o.recover==='恢复正常支付')?'<button type="button" onclick="liveModal(\'cgRecoverView\',\''+o.no+'\')">查看追回</button>':'')
    +'</td>'
    +'</tr>');
  return liveFilters('chargeOrders')
    +liveListCard('充电订单管理','<button class="btn sm" onclick="liveExport(\'chargeOrders\')">导出</button>',
      ['能源订单号','云快充订单号','关联运单号','司机姓名','手机号'+leqiFieldHelp('cgPhone'),'车牌号','订单状态'+leqiFieldHelp('cgStatus'),'运营商名称','站点名称','启动时间','充电量(度)','订单金额','万联价(元/度)'+leqiFieldHelp('cgWlj'),'补贴金额'+leqiFieldHelp('cgSubsidy'),'实付金额'+leqiFieldHelp('cgPayAmt'),'货主企业','网货主体','业务归属公司','结算主体','发货地','卸货地','运单支付状态','运单异常','异常发生时间','是否追回'+leqiFieldHelp('cgRecover'),'OCR识别状态','操作'],
      rows,'4200px')
    +notes(
      nb('子订单口径','<p>充电订单按<b>运单维度拆分子订单</b>同步 4PL（本列表一行＝一个运单的子订单）：司机启动充电即冻结组内全部匹配运单总额度，<b>建单时按冻结池运单逐单生成子订单</b>并同步（状态跟随总订单）；完成后按运单时间先进先出扣款，实际扣款子订单更新最终数据，<b>未扣款运单的子订单撤回</b>、解冻运单在实际扣款子订单详情附带展示。云快充 15 秒过程数据（电量/费用/SOC）只在万油通侧消费，不同步给 4PL——4PL 仅展示开始与结束的数据。</p>')+
      nb('金额口径','<p>子订单金额均为<b>本运单承担部分</b>：订单金额＝该运单承担的云快充金额（电费＋服务费）；万联价＝按司机补贴规则电补贴比例计算的电单价（订单创建时快照）；实付金额＝万联价×本单实际充电度数（司机扣款）；补贴金额＝订单金额−实付金额。充电中冻结组内所有匹配运单的总额度，完成按扣款解冻返还剩余。</p>'));
};

/* ===== 充电订单详情 · 独立页面（4PL 端详情均为新页面展示，非抽屉） ===== */
let chargeOrderCurrent = '';
function openChargeOrder(no){ chargeOrderCurrent = no; go('chargeOrderDetail'); }

/* 演示时段拆分（按订单金额比例拆尖峰平谷，仅演示） */
function chargePeriodsOf(o){
  if(o.no==='CD20261027000003') return [{range:'2026-10-27 18:46 ~ 19:30（峰）',kwh:31.4,efee:36.02,sfee:14.13},{range:'2026-10-27 19:30 ~ 20:12（平）',kwh:20.9,efee:18.81,sfee:9.40}];
  if(o.no==='CD20261027000004') return [{range:'2026-10-27 15:09 ~ 16:02（平）',kwh:30.6,efee:27.54,sfee:13.77}];
  if(o.no==='CD20261027000005') return [{range:'2026-10-27 11:20 ~ 12:02（尖）',kwh:22.3,efee:28.32,sfee:10.03},{range:'2026-10-27 12:02 ~ 12:35（谷）',kwh:21.8,efee:15.26,sfee:9.81}];
  if(o.no==='CD20261026000006') return [{range:'2026-10-26 20:01 ~ 20:40（谷）',kwh:14.2,efee:11.93,sfee:11.68},{range:'2026-10-26 20:40 ~ 21:18（谷）',kwh:9.2,efee:7.73,sfee:7.70}];
  if(o.no==='CD20261026000013') return [{range:'2026-10-26 20:01 ~ 21:18（谷）',kwh:15.5,efee:12.51,sfee:13.52}];
  if(o.no==='CD20261026000007') return [{range:'2026-10-26 09:47 ~ 10:40（峰）',kwh:36.2,efee:41.51,sfee:16.29},{range:'2026-10-26 10:40 ~ 11:23（平）',kwh:25.5,efee:22.95,sfee:11.48}];
  if(o.no==='CD20261025000008') return [{range:'2026-10-25 16:12 ~ 17:36（平）',kwh:42.5,efee:38.25,sfee:17.88}];
  return [{range:'—',kwh:o.kwh||0,efee:+(o.orderAmt*0.6).toFixed(2),sfee:+(o.orderAmt*0.4).toFixed(2)}];
}
/* 定位信息块：车辆实时定位（地图+地址+时间+方式）＋充电站位置 */
function cgMapBlock(o){
  return '<div class="card"><div class="card-b"><div class="sec-title">定位信息'+leqiFieldHelp('cgLoc')+'</div>'
    +'<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:14px;align-items:stretch">'
      +'<div class="cg-map">'
        +'<span class="cg-road" style="left:8%;top:12%">丁香街</span>'
        +'<span class="cg-road" style="left:58%;top:70%">开发大路</span>'
        +'<span class="cg-dash" style="left:63%;top:44%;width:96px;transform:rotate(-24deg)"></span>'
        +'<div class="cg-pin car" style="left:62%;top:44%"><span class="dot"></span><span class="lbl">车辆定位</span></div>'
        +'<div class="cg-pin station" style="left:70%;top:34%"><span class="dot"></span><span class="lbl">'+o.station+'</span></div>'
        +'<span class="cg-tag">演示地图占位 · 实际接入高德地图</span>'
      +'</div>'
      +'<dl class="kv oms-live-kv" style="margin:0">'
        +'<div class="oms-live-field"><dt>定位地址</dt><dd>'+o.locAddr+'</dd></div>'
        +'<div class="oms-live-field"><dt>定位时间</dt><dd><span class="mono">'+o.locTime+'</span></dd></div>'
        +'<div class="oms-live-field"><dt>定位方式</dt><dd>'+o.locType+'</dd></div>'
        +'<div class="oms-live-field"><dt>距充电站</dt><dd>'+o.distKm+' km</dd></div>'
        +'<div class="oms-live-field"><dt>充电站地址</dt><dd>'+o.stationAddr+'</dd></div>'
      +'</dl>'
    +'</div></div></div>';
}

/* 充电信息分组小组（3 列 kv，dd 可带 span2） */
function cgGrp(title, fields){
  return '<div class="cg-grp"><div class="cg-grp-t">'+title+'</div><dl>'
    + fields.map(([k,v])=>'<div class="oms-live-field"><dt>'+k+'</dt><dd>'+v+'</dd></div>').join('')
    + '</dl></div>';
}

/* 顶部条：能源订单号 + 状态标签（对齐 4PL 充电订单详情页顶部） */
function cgHeadBar(o){
  return '<div class="card"><div class="card-b" style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">'
    +'<span class="t2">能源订单号：</span><b class="mono" style="font-size:15px">'+o.no+'</b>'
    +cgStatusBadge(o.status)
    +cgDeductBadge(o.deduct)
  +'</div></div>';
}

/* 充电位置信息块（对齐油气「加注位置信息」：司机定位＋车牌定位＋充电站位置＋地图） */
function cgMapBlock(o){
  return '<div class="card"><div class="card-b"><div class="sec-title">充电位置信息'+leqiFieldHelp('cgLoc')+'</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1.3fr;gap:14px;align-items:stretch">'
      +'<dl class="kv oms-live-kv" style="margin:0">'
        +'<div class="oms-live-field"><dt>司机：'+o.driver+'</dt><dd>定位信息：'+o.locAddr+'</dd></div>'
        +'<div class="oms-live-field"><dt>车牌号：'+o.plate+'</dt><dd>定位信息：'+o.locAddr.split(' 充电站')[0]+'</dd></div>'
        +'<div class="oms-live-field"><dt>充电站名称：'+o.station+'</dt><dd>位置：'+o.stationAddr+'</dd></div>'
        +'<div class="oms-live-field"><dt>定位时间</dt><dd><span class="mono">'+o.locTime+'</span>（'+o.locType+' · 距充电站 '+o.distKm+' km）</dd></div>'
      +'</dl>'
      +'<div class="cg-map">'
        +'<span class="cg-road" style="left:8%;top:12%">丁香街</span>'
        +'<span class="cg-road" style="left:58%;top:70%">开发大路</span>'
        +'<span class="cg-dash" style="left:63%;top:44%;width:96px;transform:rotate(-24deg)"></span>'
        +'<div class="cg-pin car" style="left:62%;top:44%"><span class="dot"></span><span class="lbl">司机 / 车辆</span></div>'
        +'<div class="cg-pin station" style="left:70%;top:34%"><span class="dot"></span><span class="lbl">'+o.station+'</span></div>'
        +'<span class="cg-tag">司机·油气·电车辆 © 演示地图占位 · 实际接入高德地图</span>'
      +'</div>'
    +'</div></div></div>';
}

/* 详情页：分块上下排布（充电信息 → 充电位置信息 → 关联运单信息 → 充电与时段明细 → 组合支付明细 → 异常标识），页尾返回列表 */
VIEWS.chargeOrderDetail=()=>{
  const o = LIVE.chargeOrders.find(x=>x.no===chargeOrderCurrent) || LIVE.chargeOrders[0];
  chargeOrderCurrent = o.no;
  const periods=o.status==='充电中'||o.status==='已退款'
    ? '<p class="t2">时段充电明细为订单完成后的结束数据，当前订单未完成，暂无时段明细。</p>'
    : liveTable(['时段','电量(度)','电费(元)','服务费(元)','小计(元)'],
        chargePeriodsOf(o).map(p=>'<tr><td class="mono">'+p.range+'</td><td class="num">'+p.kwh.toFixed(2)+'</td><td class="num">'+cgMoney(p.efee)+'</td><td class="num">'+cgMoney(p.sfee)+'</td><td class="num"><b>'+cgMoney(p.efee+p.sfee)+'</b></td></tr>'),'760px');
  const thaw = (o.thawList&&o.thawList.length)
    ? liveTable(['序号','解冻运单号','处理结果','解冻金额(元)'],
        o.thawList.map((t,i)=>'<tr><td>'+(i+1)+'</td><td class="mono">'+t.no+'</td><td>解冻返还（未参与本次扣款）</td><td class="num">'+cgMoney(parseFloat(t.amt))+'</td></tr>'),'760px')
    : '<p class="t2">本单为单运单额度充电（冻结 1 个运单、全额扣款），无解冻运单。</p>';
  const waybillRow = '<tr><td>1</td><td class="mono">'+o.waybill+'</td><td>'+o.shipper+'</td><td>'+o.goods+'</td><td class="num">'+o.weight+'</td><td>'+o.fromAddr+'</td><td>'+o.toAddr+'</td><td>'+o.driver+'</td><td class="mono">'+o.phone+'</td><td class="mono">'+o.plate+'</td><td class="mono">'+(o.loadTime||'—')+'</td><td class="mono">'+(o.unloadTime||'—')+'</td><td>'+o.whSubj+'</td><td class="num">'+o.freightAmt+'</td><td>'+(o.waybillPay==='已支付'?'<span class="tag ok">已支付</span>':'<span class="tag warn">未付款</span>')+'</td><td>'+(o.waybillAbn==='无异常'?'<span class="t2">无异常</span>':'<span style="color:#c0483c">'+o.waybillAbn+'</span>')+'</td><td class="mono">'+(o.abnTime||'—')+'</td><td>'+cgRecoverBadge(o.recover)+'</td></tr>';
  return cgHeadBar(o)
    + '<div class="card"><div class="card-b"><div class="sec-title">充电信息</div>'
      + cgGrp('司机与车辆',[
          ['充电司机',o.driver],['司机手机号','<span class="mono">'+o.phone+'</span>'],['充电车牌号','<span class="mono">'+o.plate+'</span>'],['充电品类','电（云快充）']
        ])
      + cgGrp('充电过程',[
          ['充电量(度)','<b class="num">'+(o.kwh?o.kwh.toFixed(2):'—')+'</b>'],['桩枪编号','<span class="mono">'+o.pile+'</span>'],
          ['启动时间','<span class="mono">'+(o.startTime||'—')+'</span>'],['结束时间','<span class="mono">'+(o.endTime||'—')+'</span>'],
          ['停止原因',o.status==='已退款'?'启动失败关单（冻结全额解冻退回）':(o.endTime?'达到停止阈值/手动停止':'充电中')]
        ])
      + cgGrp('金额信息',[
          ['订单金额','<b class="num">'+cgMoney(o.orderAmt)+'</b>'],
          ['万联价(元/度)','<b class="num">'+o.wlj.toFixed(2)+'</b>'+leqiFieldHelp('cgWlj')],
          ['司机实付金额','<b class="num">'+cgMoney(o.payAmt)+'</b>'+leqiFieldHelp('cgPayAmt')],
          ['补贴金额','<b class="num">'+cgMoney(o.subsidy)+'</b>'+leqiFieldHelp('cgSubsidy')],
          ['扣减状态',cgDeductBadge(o.deduct)+leqiFieldHelp('cgDeduct')],
          ['冻结金额（运单维度）','<b class="num">'+cgMoney(o.frozen)+'</b>'+leqiFieldHelp('cgFrozen')]
        ])
      + cgGrp('站点与主体',[
          ['充电站名称',o.station],['站点地址','<span class="span2">'+o.stationAddr+'</span>'],
          ['运营商名称',o.operator],['货主企业',o.shipper],['业务归属公司',o.belongCo],['网货主体',o.whSubj],['结算主体',o.settleSubj]
        ])
      + cgGrp('时间与同步',[
          ['创建时间','<span class="mono">'+o.createTime+'</span>'],
          ['最近同步时间','<span class="mono">'+o.syncTime+'</span>'+leqiFieldHelp('cgSync')]
        ])
    + '</div></div>'
    + cgMapBlock(o)
    + '<div class="card"><div class="card-b"><div class="sec-title">关联运单信息</div>'
      + liveTable(['序号','运单号','货主企业','货品名称','承运重量(吨)','发货地','卸货地','司机姓名','司机手机号','车牌号','装车时间','卸车时间','网货主体','运费总金额(元)','运单支付状态','运单异常','异常发生时间','是否追回'],[waybillRow],'2800px')
    + '</div></div>'
    + '<div class="card"><div class="card-b"><div class="sec-title">充电与时段明细<span class="t2" style="margin-left:10px;font-weight:400">充电时段按云快充最终订单拆分（尖/峰/平/谷）</span></div>' + periods + '</div></div>'
    + '<div class="card"><div class="card-b"><div class="sec-title">额度冻结与解冻'+leqiFieldHelp('cgThaw')+'<span class="t2" style="margin-left:10px;font-weight:400">充电即冻结组内全部匹配运单总额度，完成后按运单时间先进先出扣款，未扣款运单解冻返还并撤回子订单</span></div>'
      + '<dl class="cg-grp" style="margin:10px 0 12px"><div class="oms-live-field"><dt>本次冻结运单数</dt><dd><b class="num">'+((o.thawList&&o.thawList.length)?o.thawList.length+1:1)+'</b> 个</dd></div>'
      + '<div class="oms-live-field"><dt>冻结总额度</dt><dd><b class="num">'+cgMoney(o.frozen)+'</b></dd></div>'
      + '<div class="oms-live-field"><dt>本单扣款（本运单）</dt><dd><b class="num">'+cgMoney(o.payAmt)+'</b></dd></div></dl>'
      + '<div class="cg-grp-t">解冻运单</div>' + thaw
    + '</div></div>'
    + liveSection('异常标识',[
        ['OCR 识别状态',(o.ocr==='通过'?'<span class="tag ok">通过</span>':'<span class="tag warn">未通过</span>')],
        ['是否追回',cgRecoverBadge(o.recover)+leqiFieldHelp('cgRecover')],
        ['假充电标记',o.fake==='是'?'<span class="tag warn">是</span>':'<span class="tag">否</span>'+leqiFieldHelp('cgFake')],
        ['假充电判定口径',o.fake==='是'?'充电 5 分钟累计充电量＜0.5 度，打标并短信通知司机':'—']
      ])
    + '<div style="padding:6px 2px 18px"><button type="button" class="btn" onclick="go(\'chargeOrders\')">返回列表</button></div>';
    + '<div style="padding:6px 2px 18px"><button type="button" class="btn" onclick="go(\'chargeOrders\')">返回列表</button></div>';
};

/* 充电订单字段说明（与 PRD 7.2 同源） */
const _cgFh = leqiFieldHelp;
leqiFieldHelp = function(kind){
  const dot=c=>'<span class="fh-dot'+(c?' '+c:'')+'"></span>';
  if(kind==='cgStatus') return fhCardHTML(
    '<h5>充电订单状态（穷举 5 值 · 全生命周期同步）</h5>'
    +tbl(['状态','页面展示','出现条件 → 后续流转'],[
      ['充电中',dot('run')+'「充电中」——蓝色标签','云快充启动成功后出现 → 停止充电后转「充电结束」或「待支付」；异常时经关单转「已退款」'],
      ['充电结束',dot('pend')+'「充电结束」——橙色标签','充电停止、订单账单生成中 → 支付完成后转「已支付」'],
      ['待支付',dot('pend')+'「待支付」——橙色标签','充电结束待结算扣款 → 扣款完成转「已支付」'],
      ['已支付',dot('ok')+'「已支付」——绿色标签','终态：扣款完成（万联价×实际度数已扣减、剩余额度解冻返还）'],
      ['已退款',dot('fail')+'「已退款」——灰色标签','启动卡单关单（90 秒未收到启动成功→查询→关单）：冻结全额解冻退回，终态']
    ])
    +'<p><b>子订单状态＝总订单状态：</b>订单按运单维度拆分子订单同步 4PL（建单即按冻结池全部运单生成），子订单无独立状态机，状态跟随总订单同步更新；完成后未扣款运单的子订单撤回（详见「额度冻结与解冻」）。</p>'
    +'<p><b>同步口径：</b>建单即同步（开始数据）→ 状态流转同步更新 → 完成后更新最终子订单；15 秒过程数据不同步给 4PL。</p>'
    +'<p class="mut">与 PRD 7.2 / 流程二同源。</p>');
  if(kind==='cgWlj') return fhCardHTML(
    '<h5>万联价（元/度）</h5>'
    +'<p>按司机补贴规则的<b>电补贴比例</b>计算的电单价，订单创建时记录快照。</p>'
    +tbl(['口径','说明'],[
      ['司机扣款','实付金额＝万联价 × 实际充电度数'],
      ['补贴差额','补贴金额＝订单金额 − 实付金额'],
      ['停止阈值','可充度数＝冻结额度 ÷ 万联价，到达阈值下发停止充电'],
      ['计价配置','司机补贴规则（万联价计算配置）维护电补贴比例；公式以配置页最终口径为准']
    ])
    +'<p class="mut">与 PRD 7.2 / 数据定义同源。</p>');
  if(kind==='cgSubsidy') return fhCardHTML(
    '<h5>补贴金额</h5>'
    +'<p>补贴金额＝<b>订单金额 − 实付金额</b>（自然差额，不做独立拆分计算）。</p>'
    +tbl(['场景','展示'],[
      ['正常订单','订单金额（云快充电费＋服务费）− 万联价×度数；如 87.61 − 62.76 ＝ 24.85'],
      ['关单退款','0.00（无有效充电）'],
      ['假充电','按实际度数计算（0.32 度 → 补贴 0.16），同时打标假充电']
    ])
    +'<p class="mut">与 PRD 7.2 同源。</p>');
  if(kind==='cgPayAmt') return fhCardHTML(
    '<h5>实付金额（司机扣款）</h5>'
    +'<p>实付金额＝<b>万联价 × 实际充电度数</b>，为司机侧实际扣款金额；充电中按冻结额度预计，完成按实际度数结算。</p>'
    +'<p class="mut">与 PRD 7.2 同源。</p>');
  if(kind==='cgDeduct') return fhCardHTML(
    '<h5>扣减状态（穷举 3 值）</h5>'
    +tbl(['状态','页面展示','出现条件'],[
      ['未扣减',dot('pend')+'「未扣减」——灰色标签','订单未完成（充电中/待支付），额度处于冻结占用'],
      ['已扣减',dot('ok')+'「已扣减」——绿色标签','订单完成：按万联价×实际度数扣减，剩余冻结解冻返还'],
      ['部分扣减',dot('warn')+'「部分扣减」——橙色标签','组合支付多运单分摊时部分运单完成扣减的中间态']
    ])
    +'<p class="mut">与 PRD 数据定义同源。</p>');
  if(kind==='cgRecover') return fhCardHTML(
    '<h5>是否追回（穷举 3 值 · 追回闭环）</h5>'
    +tbl(['取值','页面展示','出现条件','由谁处理 → 后续流转'],[
      ['未追回',dot('warn')+'「未追回」——橙色标签','取消运单 / 终止结算等运单异常触发时对已有订单打标：有完成订单（已实扣）允许取消并打标；仅未完成订单停止充电＋回收后打标','运营在列表操作列点「追回」→ 提交后转「已追回」或「恢复正常支付」'],
      ['已追回',dot('ok')+'「已追回」——绿色标签','运营提交追回操作（追回凭证 1–5 张 ＋ 追回备注）后置该值，同时写 1 条追回记录，操作动作＝「新增」','终态：操作列变「查看追回」，弹层展示追回凭证、追回备注与操作记录（序号 / 操作动作 / 操作人 / 操作时间 / 备注）'],
      ['恢复正常支付',dot('')+'「恢复正常支付」——灰色标签','运营提交追回时勾选「恢复正常支付」：运单异常已撤销、该订单无需追回，追回凭证转为选填','终态：操作列变「查看追回」，弹层多一条「恢复正常支付」标识条；追回凭证显示 --、追回备注显示「恢复正常支付」、操作记录操作动作＝「恢复正常支付」']
    ])
    +'<h5>页面展示示例</h5>'
    +tbl(['位置','展示'],[
      ['列表「是否追回」列 / 详情「异常标识」','未追回＝橙色「未追回」；已追回＝绿色「已追回」；恢复正常支付＝灰色「恢复正常支付」；无追回语义的正常订单同为「未追回」（码值默认 1）'],
      ['列表操作列','未追回：详情 / 追回；已追回、恢复正常支付：详情 / 查看追回（两个按钮互斥）'],
      ['追回操作弹层','头部 4 项示例如「能源订单号 CD20261021000017 · 关联运单号 W20261021000018 · 司机姓名 李春生 · 订单金额 87.36元」；勾选框「恢复正常支付」；追回凭证（最多 5 张，jpg / png / jpeg，单张 ≤5MB，未勾选恢复正常支付时必填，缺凭证提示「请上传追回凭证」）；追回备注 0–200 字选填；提交成功提示「追回操作提交成功」'],
      ['查看追回弹层','操作记录示例：1 ｜ 新增 ｜ 张世民（运营中台）｜ 2026-10-21 15:42:10 ｜ 已与云快充核对并线下追缴，款项已退回平台账户']
    ])
    +'<p class="mut">追回只落追回记录与状态：不动司机电额度 / 运单额度、不写能源变更日志、不触发资金；与油气能源订单的追回口径一致，与 PRD 7.2 同源。</p>');
  if(kind==='cgFake') return fhCardHTML(
    '<h5>假充电标记</h5>'
    +tbl(['取值','页面展示','判定口径'],[
      ['否',dot('')+'「否」','正常充电'],
      ['是',dot('fail')+'「是」——橙色标签','充电 5 分钟累计充电量＜0.5 度，打标并短信通知司机；随订单同步 4PL']
    ])
    +'<p class="mut">与 PRD 数据定义同源。</p>');
  if(kind==='cgLoc') return fhCardHTML(
    '<h5>定位信息（车辆定位＋充电站位置）</h5>'
    +tbl(['字段','页面展示','口径'],[
      ['定位地址','车辆最近一次上报的定位地址（含方位描述）','车辆 GPS/基站定位逆地址解析；充电中订单随充电过程刷新，完成订单展示充电开始前最后一次定位'],
      ['定位时间','<b>最近定位时间</b>（如 2026-10-26 09:47:00）','订单维度取最近一次上报时间；地图标注点即该定位'],
      ['定位方式','GPS / 基站（穷举 2 值）','GPS=车载定位设备上报；基站=无 GPS 信号时按基站定位（精度较低）'],
      ['距充电站','定位点与充电站的直线距离（km）','用于判断车辆是否在站内充电'],
      ['充电站地址','充电站完整地址（运营商侧同步）','与「充电站点」块站点地址一致']
    ])
    +'<p><b>地图：</b>实际接入高德地图 SDK，展示车辆定位点＋充电站点位及连线；原型为占位示意。</p>'
    +'<p class="mut">与 4PL 端油气订单详情页定位展示一致。</p>');
  if(kind==='etypeTip') return fhCardHTML(
    '<h5>车辆能源类型 / 能源类型</h5>'
    +tbl(['场景','展示'],[
      ['能源运单管理','装车时按车辆档案写入；枚举：柴油 / 天然气 / 电 / 油，标签样式：柴油·天然气灰、电绿、油橙'],
      ['能源规则配置','规则的能源类型：油气 / 电——电规则即分电规则，与油气规则三维唯一分开校验'],
      ['能源类型与额度','能源类型=油气/电 决定额度归属：「分配/已使用/可用/已圈回额度」为同一套字段，按能源类型取油气或电账本的金额']
    ])
    +'<p class="mut">展示口径：电=绿标、油=橙标、柴油/天然气=灰标；同列名按能源类型区分含义。</p>');
  if(kind==='eRateTip') return fhCardHTML(
    '<h5>电补贴比例</h5>'
    +'<p>司机补贴规则的新增字段（y）：用于计算电的万联价——订单创建时按司机补贴规则记录万联价快照。</p>'
    +tbl(['口径','说明'],[
      ['司机扣款','万联价×实际充电度数'],
      ['补贴金额','云快充金额−万联价扣款（差额）'],
      ['未配置','该组合电运单不参与分电与补贴计算，列表显示「—」'],
      ['公式','万联价＝按司机补贴规则补贴比例计算的电单价；公式以万联价计算配置页最终口径为准']
    ]));
  if(kind==='eRateCap') return fhCardHTML(
    '<h5>分电上限比例配置（本期新增入口）</h5>'
    +'<p>与「分油上限比例配置」并列的独立配置项：配置分电比率上限，输入 <b>0–40、最多两位小数</b>（演示值 25.00%）。能源类型=电 的规则，派发比例不得超过该上限。</p>'
    +tbl(['场景','展示'],[
      ['不超过上限','正常保存（绿色数值）'],
      ['超过上限','添加/编辑保存拦截；列表中超限的存量规则派发比例显示红色（演示：小桔-太原电规则(超限停用) 30%）']
    ])
    +'<p>油气规则仍按「分油上限比例配置」（演示值 25.55%）校验，两者互不影响。</p>');
  if(kind==='ownerERate') return fhCardHTML(
    '<h5>电优惠费率</h5>'
    +'<p>货主返利规则为「按费率」时的新增字段：货主返利按电优惠费率计算（电费金额×电优惠费率），<b>复用能源返利链路</b>（返利随充电订单同步 4PL 记录）。</p>'
    +tbl(['场景','展示'],[
      ['按费率+已配置','显示费率值（加粗）'],
      ['按费率+未配置','显示「—」，该组合电订单不计算货主返利'],
      ['按能源额度','无费率概念，油气/电费率列均显示「—」']
    ]));
  if(kind==='oilFrozenTip') return fhCardHTML(
    '<h5>油气-冻结额度</h5>'
    +tbl(['场景','展示'],[
      ['加注预冻结','司机扫码加油时按预计加注金额冻结（加注完成按实扣解冻返还剩余）'],
      ['回收冻结','到达回收节点且司机有未完结订单时冻结电/油气余额（干预矩阵），订单完结后自动回收']
    ])
    +'<p class="mut">油气账本口径；电账本冻结见「电-冻结额度」。</p>');
  if(kind==='eFrozenTip') return fhCardHTML(
    '<h5>电-冻结额度</h5>'
    +tbl(['场景','展示'],[
      ['充电预冻结','充电即冻结组内<b>全部匹配运单</b>的总额度（跨主体合并、全额冻结）；可充度数＝冻结额度 ÷ 万联价，到达阈值下发停止充电'],
      ['完成','按万联价×实际度数扣减，剩余冻结解冻返还（运单维度明细见充电订单详情「额度冻结与解冻」）'],
      ['启动失败关单','冻结全额解冻退回（已退款）']
    ])
    +'<p><b>输入金额冻结：</b>当前为全额冻结（无输入金额方式）；后续支持按输入金额冻结时按输入金额冻结。</p>'
    +'<p class="mut">与 PRD 流程一/数据定义同源。</p>');
  if(kind==='cgThaw') return fhCardHTML(
    '<h5>额度冻结与解冻（子订单口径）</h5>'
    +tbl(['节点','口径'],[
      ['建单（充电启动成功）','冻结组内<b>全部匹配运单</b>的总额度（跨主体合并、全额冻结）；同时按冻结池运单<b>逐单生成子订单</b>同步 4PL，状态跟随总订单（充电中）'],
      ['充电中','子订单展示开始数据；4PL 可见全部子订单（每个运单一条）'],
      ['完成（已支付）','按<b>运单时间先进先出</b>扣款：实际扣款运单的子订单更新最终数据（本页）；<b>未扣款运单的子订单撤回</b>（4PL 列表不再展示），解冻运单在本块附带展示'],
      ['启动失败关单','冻结全额解冻退回（已退款），子订单全量撤回']
    ])
    +'<p><b>本单扣款＝本运单承担金额</b>（订单金额/实付金额均为本运单维度）；解冻金额＝该运单冻结额度（未参与扣款，全额返还）。</p>'
    +'<p><b>输入金额冻结：</b>当前为全额冻结（无输入金额方式）；后续支持按输入金额冻结时按输入金额冻结。</p>'
    +'<p class="mut">与 PRD 6.2 流程一/7.2 充电订单管理同源。</p>');
  if(kind==='cgSync') return fhCardHTML(
    '<h5>最近同步时间（同步口径）</h5>'
    +tbl(['同步节点','同步内容'],[
      ['建单即同步','开始数据：启动时间、站点、桩枪'],
      ['状态流转同步','订单状态每次变化（充电中→充电结束→待支付→已支付/已退款）即更新'],
      ['完成更新','订单完成后更新最终子订单（结束数据：充电量、金额、SOC、时段明细）']
    ])
    +'<p><b>15 秒过程数据不同步：</b>云快充充电过程中约 15 秒推送一次的过程数据（电量/费用/SOC）只在万油通侧消费，不同步给 4PL——4PL 仅展示开始与结束的数据。</p>'
    +'<p class="mut">与 PRD 6.1/6.2 同源。</p>');
  if(kind==='cgFrozen') return fhCardHTML(
    '<h5>冻结金额（运单维度）</h5>'
    +tbl(['场景','展示'],[
      ['充电中','冻结组内所有匹配运单的总额度（跨主体合并、全额冻结）；可充度数＝冻结额度 ÷ 万联价，到达阈值下发停止充电'],
      ['完成','按万联价×实际度数扣减，剩余冻结解冻返还'],
      ['启动失败关单','冻结全额解冻退回（已退款）']
    ])
    +'<p><b>输入金额冻结：</b>当前充电即全额冻结（无输入金额方式）；后续支持按输入金额冻结时按输入金额冻结。</p>'
    +'<p class="mut">与 PRD 流程一/数据定义同源。</p>');
  if(kind==='wbFrozenTip') return fhCardHTML(
    '<h5>冻结额度（元）· 运单维度电账本</h5>'
    +'<p>该运单的额度在<b>分电充电</b>过程中被冻结占用的金额。冻结只发生在电：司机发起充电时，系统把<b>冻结池内全部匹配运单</b>的额度<b>全额冻结</b>，本列＝该运单被冻的那一份。</p>'
    +tbl(['运单所处场景','冻结额度展示','说明'],[
      ['未派发 / 无额度数据','「—」','未匹配到派发规则，未生成运单额度'],
      ['已派发，无进行中充电订单','0.00','额度在可用/已使用里，没有占用'],
      ['充电中','被冻结金额（橙色加粗）','按冻结池全额冻结；本运单的可用额度同时变为 0.00'],
      ['待支付（未扣减）','被冻结金额（橙色加粗）','账单已出、尚未扣款，冻结继续占用'],
      ['充电结束 / 已支付（已扣减）','0.00','按万联价×实际度数扣减，剩余解冻回可用额度'],
      ['已退款（启动失败关单）','0.00','冻结全额解冻退回'],
      ['已回收','0.00','可用额度已圈回，记入「已圈回额度」']
    ])
    +'<p><b>与另外三个额度列的关系：</b>分配额度 ＝ 已使用额度 ＋ 冻结额度 ＋ 可用额度 ＋ 已圈回额度；冻结期间可用额度相应为 0.00，不会与冻结重复计数。</p>'
    +'<p><b>油气运单显示「—」：</b>油气加注的预冻结发生在司机维度（扫码加油按预计金额冻结），不落运单，因此本列对油气不适用。</p>'
    +'<p class="mut">三处同源：本列、司机能源管理「电-冻结额度」（该司机名下进行中订单冻结合计）、充电订单详情「冻结总额度」（冻结池内各运单冻结之和）。与 PRD 7.2.5 同源。</p>');
  if(kind==='cgPhone') return fhCardHTML(
    '<h5>手机号展示口径</h5>'
    +'<p>列表脱敏展示（138****4021）；详情抽屉展示完整手机号。与司机能源管理展示一致。</p>');
  return _cgFh(kind);
};



/* ==================== 4PL 司机能源管理模块 ==================== */

/* 演示数据：司机油气/电账户（15 司机，穷举：双账户/仅油气/仅电/有冻结/零额度） */
LIVE.driverOil=[
  {name:'王建国', phone:'138****4021', oilAvail:76278.00, oilUsed:324098.00, oilTotal:400376.00, oilFrozen:0, eAvail:428.60, eUsed:2871.40, eTotal:3820.00, eFrozen:520.00},
  {name:'刘志强', phone:'139****8834', oilAvail:0, oilUsed:90947.59, oilTotal:90947.59, oilFrozen:0, eAvail:0, eUsed:0, eTotal:356.00, eFrozen:356.00},
  {name:'赵德海', phone:'137****2260', oilAvail:55178.00, oilUsed:8735.77, oilTotal:63913.77, oilFrozen:0, eAvail:0, eUsed:87.61, eTotal:87.61, eFrozen:0},
  {name:'马春林', phone:'134****5527', oilAvail:16892.00, oilUsed:13026.77, oilTotal:29918.77, oilFrozen:0, eAvail:402.75, eUsed:46.68, eTotal:449.43, eFrozen:0},
  {name:'孙晓峰', phone:'136****9917', oilAvail:11632.61, oilUsed:16353.77, oilTotal:27986.38, oilFrozen:186.40, eAvail:0, eUsed:0, eTotal:0, eFrozen:0},
  {name:'周永康', phone:'133****9903', oilAvail:8445.80, oilUsed:58316.80, oilTotal:66762.60, oilFrozen:0, eAvail:96.40, eUsed:103.24, eTotal:199.64, eFrozen:0},
  {name:'吴天佑', phone:'135****7742', oilAvail:0, oilUsed:0, oilTotal:0, oilFrozen:0, eAvail:318.20, eUsed:37.80, eTotal:356.00, eFrozen:0},
  {name:'郑立群', phone:'150****3358', oilAvail:7439.00, oilUsed:0, oilTotal:7439.00, oilFrozen:0, eAvail:186.00, eUsed:52.40, eTotal:238.40, eFrozen:0},
  {name:'冯长海', phone:'188****6602', oilAvail:7058.93, oilUsed:8068.47, oilTotal:15127.40, oilFrozen:0, eAvail:0, eUsed:128.46, eTotal:128.46, eFrozen:0},
  {name:'许志远', phone:'159****8821', oilAvail:6731.84, oilUsed:174.16, oilTotal:6906.00, oilFrozen:0, eAvail:64.10, eUsed:0, eTotal:64.10, eFrozen:0},
  {name:'陈国栋', phone:'131****4409', oilAvail:0, oilUsed:20420.12, oilTotal:20420.12, oilFrozen:0, eAvail:0, eUsed:0, eTotal:0, eFrozen:0},
  {name:'林万成', phone:'186****2251', oilAvail:23186.50, oilUsed:44310.22, oilTotal:67496.72, oilFrozen:0, eAvail:228.90, eUsed:214.55, eTotal:443.45, eFrozen:0},
  {name:'李长顺', phone:'135****3391', oilAvail:0, oilUsed:0, oilTotal:0, oilFrozen:0, eAvail:0, eUsed:0, eTotal:486.00, eFrozen:486.00},
  {name:'郑卫东', phone:'131****6642', oilAvail:0, oilUsed:0, oilTotal:0, oilFrozen:0, eAvail:0, eUsed:0, eTotal:398.00, eFrozen:398.00},
  {name:'冯玉梅', phone:'130****2285', oilAvail:0, oilUsed:0, oilTotal:0, oilFrozen:0, eAvail:0, eUsed:0, eTotal:287.00, eFrozen:287.00}
];

/* 能源变更日志演示（类型 5 值穷举） */
LIVE.oilLogs=[
  {type:'分配', amt:'+8,000.00', wb:'W20261028000011', order:'—', avail:'84,278.00', used:'324,098.00', op:'系统（规则派发）', time:'2026-10-28 07:35:12'},
  {type:'加注', amt:'-81.33', wb:'W2026103100000019', order:'WYB20261031181748540778', avail:'76,278.00', used:'324,098.00', op:'系统（订单扣款）', time:'2026-10-31 18:17:52'},
  {type:'加注', amt:'-45.87', wb:'W2026103000000011', order:'WYB20261030160138549619', avail:'76,359.33', used:'324,016.67', op:'系统（订单扣款）', time:'2026-10-30 16:02:10'},
  {type:'圈回', amt:'-5,000.00', wb:'W2026102000000036', order:'—', avail:'71,278.00', used:'324,016.67', op:'张世民', time:'2026-10-26 14:20:33'},
  {type:'订单取消', amt:'+81.33', wb:'W2026103100000019', order:'WYB20261031181748540778', avail:'81,359.33', used:'323,935.34', op:'系统（退款返还）', time:'2026-11-01 09:12:04'},
  {type:'恢复', amt:'+3,000.00', wb:'W2026101500000008', order:'—', avail:'84,359.33', used:'323,935.34', op:'李文静', time:'2026-10-24 10:05:47'},
  {type:'分配', amt:'+12,000.00', wb:'W20261027000008', order:'—', avail:'96,359.33', used:'323,935.34', op:'系统（规则派发）', time:'2026-10-27 09:20:33'},
  {type:'加注', amt:'-97.60', wb:'W2026103000000006', order:'WYB20261030132936648964', avail:'84,261.73', used:'324,032.94', op:'系统（订单扣款）', time:'2026-10-30 13:30:02'}
];

/* 电变更日志演示（类型 8 值穷举） */
LIVE.elecLogs=[
  {type:'分电', amt:'+330.00', wb:'W20261028000011', order:'—', avail:'758.60', used:'2,871.40', op:'系统（分电规则）', time:'2026-10-28 07:35:12'},
  {type:'冻结', amt:'-356.00', wb:'W20261028000012', order:'CKC202610281032002', avail:'402.60', used:'2,871.40', op:'系统（充电预冻结）', time:'2026-10-28 10:32:04'},
  {type:'冻结', amt:'-431.00', wb:'W20261026000005', order:'CKC202610262001006', avail:'833.60', used:'2,871.40', op:'系统（充电预冻结）', time:'2026-10-26 20:01:02'},
  {type:'解冻', amt:'+186.40', wb:'W20261026000015', order:'CKC202610262001006', avail:'1,020.00', used:'2,871.40', op:'系统（完成解冻返还）', time:'2026-10-26 21:19:07'},
  {type:'解冻', amt:'+110.32', wb:'W20261026000016', order:'CKC202610262001006', avail:'1,130.32', used:'2,871.40', op:'系统（完成解冻返还）', time:'2026-10-26 21:19:07'},
  {type:'实扣', amt:'-28.08', wb:'W20261026000005', order:'CD20261026000006', avail:'1,102.24', used:'2,899.48', op:'系统（万联价扣款）', time:'2026-10-26 21:19:08'},
  {type:'实扣', amt:'-18.60', wb:'W20261026000014', order:'CD20261026000013', avail:'1,083.64', used:'2,918.08', op:'系统（万联价扣款）', time:'2026-10-26 21:19:08'},
  {type:'圈回', amt:'-200.00', wb:'W2026102000000036', order:'—', avail:'883.64', used:'2,918.08', op:'张世民', time:'2026-10-25 15:44:21'},
  {type:'回收', amt:'-64.10', wb:'W2026101500000009', order:'—', avail:'819.54', used:'2,918.08', op:'系统（回收节点）', time:'2026-10-22 00:30:00'},
  {type:'恢复', amt:'+64.10', wb:'W2026101500000009', order:'—', avail:'883.64', used:'2,918.08', op:'李文静', time:'2026-10-23 11:08:15'},
  {type:'解冻', amt:'+356.00', wb:'W2026102500000002', order:'CKC202610250830010', avail:'1,239.64', used:'2,918.08', op:'系统（启动失败全额退回）', time:'2026-10-25 08:32:40'},
  {type:'分电', amt:'+128.00', wb:'W20261029000007', order:'—', avail:'1,367.64', used:'2,918.08', op:'系统（分电规则）', time:'2026-10-29 06:12:30'}
];

/* 能源账户管理演示（网货主体 × 油气/电 两行） */
LIVE.oilAccounts=[
  {subj:'万联易达物流科技有限公司', etype:'油气', granted:'6,876,859.02', used:'200,178.62'},
  {subj:'万联易达物流科技有限公司', etype:'电', granted:'128,400.00', used:'17,302.46'},
  {subj:'鲁通冷链物流有限公司', etype:'油气', granted:'291,260.82', used:'85,673.64'},
  {subj:'鲁通冷链物流有限公司', etype:'电', granted:'42,300.00', used:'6,845.19'},
  {subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', etype:'油气', granted:'642,900.00', used:'416,660.00'},
  {subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', etype:'电', granted:'8,600.00', used:'0.00'},
  {subj:'沈阳长鑫冷链物流有限公司', etype:'油气', granted:'13,502.00', used:'0.00'},
  {subj:'沈阳长鑫冷链物流有限公司', etype:'电', granted:'3,560.00', used:'356.00'},
  {subj:'盘锦禹王粮油物流部', etype:'油气', granted:'0.00', used:'0.00'},
  {subj:'盘锦禹王粮油物流部', etype:'电', granted:'2,890.00', used:'1,102.24'}
];

const amtColor=s=>String(s).startsWith('-')?'#c0483c':'#1a7f4b';
let driverLogCurrent={page:'driverOilLog',name:'',phone:''};
function openDriverLog(page,name,phone){ driverLogCurrent={page,name,phone}; go(page); }

/* —— 司机能源管理（一个司机一条记录；油气额度与电额度并排字段，冻结仅电有） —— */
VIEWS.driverOil=()=>{
  const list=liveRows('driverOil');
  const rows=list.map((d,i)=>'<tr>'
    +'<td class="num">'+(i+1)+'</td>'
    +'<td>'+d.name+'</td>'
    +'<td class="mono">'+d.phone+'</td>'
    +'<td class="num">'+money(d.oilAvail)+'</td>'
    +'<td class="num">'+money(d.oilUsed)+'</td>'
    +'<td class="num">'+money(d.oilTotal)+'</td>'
    +'<td class="num">'+money(d.eAvail)+'</td>'
    +'<td class="num">'+money(d.eUsed)+'</td>'
    +'<td class="num">'+money(d.eTotal)+'</td>'
    +'<td class="num">'+(d.eFrozen?'<b style="color:#d46b08">'+money(d.eFrozen)+'</b>':money(d.eFrozen))+leqiFieldHelp('eFrozenTip')+'</td>'
    +'<td class="acts">'
      +'<button type="button" onclick="liveModal(\'oilRecover\',\''+d.phone+'\')">回收油气额度</button>'
      +'<button type="button" onclick="liveModal(\'elecRecover\',\''+d.phone+'\')">回收电额度</button>'
      +'<button type="button" onclick="openDriverLog(\'driverOilLog\',\''+d.name+'\',\''+d.phone+'\')">变更日志</button>'
    +'</td></tr>');
  return liveFilters('driverOil')
    +liveListCard('司机能源管理','<button class="btn sm" onclick="liveExport(\'driverOil\')">导出</button>',
      ['序号','司机姓名','司机手机号','油气-当前可使用额度(元)','油气-累计使用额度(元)','油气-总派发额度(元)','电-当前可使用额度(元)','电-累计使用额度(元)','电-总派发额度(元)','电-冻结额度(元)','操作'],
      rows,'1320px')
    +notes(
      nb('记录粒度与额度字段','<p><b>一个司机一条记录</b>：油气额度与电额度以<b>并排字段</b>展示（两块独立账本、额度互不占用）。油气额度三列：当前可使用额度、累计使用额度、总派发额度；电额度四列：当前可使用额度、累计使用额度、总派发额度、<b>冻结额度</b>。</p><p><b>冻结额度仅电有</b>（充电中订单冻结的金额，充电即冻结组内全部匹配运单的总额度、跨主体合并）；油气不存在冻结状态，因此不设冻结列。</p>')+
      nb('回收与日志','<p>回收<b>按能源类型分别操作</b>：<b>回收油气额度</b>圈回该司机全部油气可用额度转成运费；<b>回收电额度</b>圈回该司机全部电可用额度转成运费——司机名下有充电中订单时不拦截，冻结部分不受影响、只圈回可用额度。</p><p>【变更日志】进入<b>能源变更日志</b>单页，按能源类型（油气/电）列展示与筛选该司机的全部额度变动记录。</p>'));
};

/* —— 能源变更日志（油气 / 电合并单页；能源类型列 + 筛选；司机信息固定头跳转页） —— */
function driverLogPage(pageId, preset){
  const d=driverLogCurrent;
  const all=[].concat(
    (LIVE.oilLogs||[]).map(r=>({...r,energy:'油气'})),
    (LIVE.elecLogs||[]).map(r=>({...r,energy:'电'}))
  );
  if(preset) liveQuery[pageId]={...(liveQuery[pageId]||{}),energy:preset};
  const q=liveQuery[pageId]||{};
  const logs=all.filter(r=>{
    if(q.energy&&r.energy!==q.energy) return false;
    if(q.type&&r.type!==q.type) return false;
    if(q.wb&&!String(r.wb||'').includes(q.wb)) return false;
    if(q.order&&!String(r.order||'').includes(q.order)) return false;
    if(Array.isArray(q.time)){
      const day=String(r.time||'').slice(0,10);
      if(q.time[0]&&day<q.time[0]) return false;
      if(q.time[1]&&day>q.time[1]) return false;
    }
    return true;
  });
  const rows=logs.map(r=>'<tr>'
    +'<td><span class="tag'+(String(r.amt).startsWith('-')?'':' ok')+'">'+r.type+'</span></td>'
    +'<td>'+energyTag(r.energy)+'</td>'
    +'<td class="num" style="color:'+amtColor(r.amt)+'"><b>'+r.amt+'</b></td>'
    +'<td class="mono">'+r.wb+'</td>'
    +'<td class="mono">'+r.order+'</td>'
    +'<td class="num">'+r.avail+'</td>'
    +'<td class="num">'+r.used+'</td>'
    +'<td>'+r.op+'</td>'
    +'<td class="mono">'+r.time+'</td></tr>');
  return '<div class="card"><div class="card-b" style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">'
    +'<button type="button" class="btn" onclick="go(\'driverOil\')">← 返回列表</button>'
    +'<span class="t2">司机姓名：</span><b>'+d.name+'</b>'
    +'<span class="t2">手机号：</span><b class="mono">'+d.phone+'</b>'
    +'</div></div>'
    + liveFilters('driverOilLog')
    + liveListCard('能源变更日志','<button class="btn sm" onclick="liveExport(\'driverOilLog\')">导出</button>',
      ['变更类型','能源类型','金额(元)','运单号','关联能源订单号','可用额度(元)','已使用额度(元)','操作人','操作时间'],
      rows,'1600px')
    +notes(nb('变更类型口径','<p><b>能源类型=油气</b> 5 值：<b>分配</b>（规则/充值派发，+）、<b>加注</b>（加油订单扣款，−）、<b>圈回</b>（额度回收/回收节点自动回收，−）、<b>订单取消</b>（退款返还，+）、<b>恢复</b>（人工恢复额度，+）。</p><p><b>能源类型=电</b> 8 值：<b>分电</b>（分电规则派发，+）、<b>冻结</b>（充电预冻结，占用）、<b>解冻</b>（完成解冻返还/启动失败全额退回，+）、<b>实扣</b>（万联价扣款，−）、<b>圈回</b>（电额度回收，−）、<b>恢复</b>（人工恢复额度，+）、<b>回收</b>（回收节点自动回收，−）、<b>手动分配</b>（人工补分，+；功能后续开放，枚举预留）。</p>')+
      nb('记账口径','<p>全部额度变动记账至额度流水并汇总到账户；每行展示变动后余额（可用额度/已使用额度）与操作人；本页仅查看，不发起操作。能源类型筛选：油气 / 电，默认全部。</p>'));
}
VIEWS.driverOilLog=()=>driverLogPage('driverOilLog','');

/* —— 能源账户管理（网货主体 × 能源类型，两行数据） —— */
VIEWS.oilAccount=()=>{
  const list=liveRows('oilAccount');
  const rows=list.map((d,i)=>'<tr>'
    +'<td class="num">'+(i+1)+'</td>'
    +'<td>'+d.subj+'</td>'
    +'<td>'+(d.etype==='油气'?'<span class="tag">油气</span>':'<span class="tag ok">电</span>')+'</td>'
    +'<td class="num">'+d.granted+'</td>'
    +'<td class="num">'+d.used+'</td></tr>');
  return liveFilters('oilAccount')
    +liveListCard('能源账户管理','<button class="btn sm" onclick="liveExport(\'oilAccount\')">导出</button>',
      ['序号','网货主体名称','能源类型','已派发额度(元)','已使用额度(元)'],
      rows,'1100px')
    +notes(nb('账户粒度','<p>账户按<b>网货主体 × 能源类型</b>建账：同一网货主体的油气账户与电账户为<b>两行数据</b>（油气一行、电一行），额度互不占用；已派发＝规则/充值累计派发，已使用＝订单累计扣款。</p>'));
};

/* —— 4PL 能源运单管理 / 三个配置页 演示数据 —— */

/* 能源运单：19 条（车辆能源类型 4 值 × 派发状态 × 异常；能源类型=油气/电 决定额度归属；额度＝分配/已使用/冻结/可用/已圈回，冻结仅电） */
LIVE.driverWaybills=[
  {wb:'UD2026110200000027', status:'取消-待支付', audit:'已保存', abn:'取消运单', plate:'粤HRE371', etype:'柴油', energy:'油气', driver:'付迪', phone:'18310804245', cust:'西安市临潼区梦甜电子商务商行（个体工商户）', subj:'万联易达物流科技有限公司', freight:111.00, sb:'未启用', oilRate:'5%', gasRate:'5%', eRate:'—', splitRate:'30%', node:'装货', splitTime:'2026-11-02 13:43:45', grant:31.00, used:0.00, avail:0.00, back:31.00, splitStatus:'已回收', ctime:'2026-11-02 13:33:06', op:false},
  {wb:'UD2026110200000014', status:'已卸货', audit:'待处理', abn:'无异常', plate:'粤HRE371', etype:'柴油', energy:'油气', driver:'付迪', phone:'18310804245', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:400.00, sb:'启用', oilRate:'5%', gasRate:'5%', eRate:'—', splitRate:'30%', node:'装货', splitTime:'2026-11-02 10:56:04', grant:120.00, used:0.00, avail:120.00, back:0.00, splitStatus:'已派发', ctime:'2026-11-02 10:55:03', op:true},
  {wb:'UD2026110200000010', status:'已卸货', audit:'待处理', abn:'无异常', plate:'黑TV15BG', etype:'柴油', energy:'油气', driver:'孙飞朋', phone:'18061914733', cust:'西安市临潼区梦甜电子商务商行（个体工商户）', subj:'万联易达物流科技有限公司', freight:2.00, sb:'未启用', oilRate:'5%', gasRate:'5%', eRate:'—', splitRate:'30%', node:'装货', splitTime:'2026-11-02 10:45:34', grant:0.00, used:0.00, avail:0.00, back:0.00, splitStatus:'已回收', ctime:'2026-11-02 10:45:02', op:false},
  {wb:'UD2026103100000019', status:'已卸货', audit:'待处理', abn:'无异常', plate:'甘G20Y4G', etype:'柴油', energy:'油气', driver:'石广川', phone:'18037252735', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:500.00, sb:'启用', oilRate:'5%', gasRate:'5%', eRate:'—', splitRate:'30%', node:'装货', splitTime:'2026-10-31 18:17:13', grant:150.00, used:81.33, avail:68.67, back:0.00, splitStatus:'已回收', ctime:'2026-10-31 18:16:50', op:false},
  {wb:'UD2026103100000020', status:'装货/在途', audit:'待处理', abn:'无异常', plate:'甘G20Y4G', etype:'柴油', energy:'油气', driver:'石广川', phone:'18037252735', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:400.00, sb:'启用', oilRate:'5%', gasRate:'5%', eRate:'—', splitRate:'30%', node:'装货', splitTime:'2026-10-31 18:20:44', grant:120.00, used:0.00, avail:120.00, back:0.00, splitStatus:'已派发', ctime:'2026-10-31 18:20:15', op:true},
  {wb:'UD2026103000000087', status:'已卸货', audit:'转结算', abn:'无异常', plate:'冀F87653', etype:'柴油', energy:'油气', driver:'肖红', phone:'13683230971', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:10.00, sb:'未启用', oilRate:'2%', gasRate:'2%', eRate:'—', splitRate:'30%', node:'货主结算后', splitTime:'—', grant:0.00, used:0.00, avail:0.00, back:0.00, splitStatus:'未派发', ctime:'2026-10-30 22:03:03', op:false},
  {wb:'UD2026103000000085', status:'已卸货', audit:'待处理', abn:'无异常', plate:'赣CC91N6', etype:'柴油', energy:'油气', driver:'颜芬', phone:'17614513940', cust:'北京小桔科技集团有限公司', subj:'万联易达物流科技有限公司', freight:222.00, sb:'未启用', oilRate:'6%', gasRate:'10%', eRate:'—', splitRate:'30%', node:'装货', splitTime:'2026-10-30 21:46:27', grant:62.00, used:0.00, avail:62.00, back:0.00, splitStatus:'已派发', ctime:'2026-10-30 21:46:12', op:true},
  {wb:'UD2026102900000031', status:'已卸货', audit:'审核通过', abn:'无异常', plate:'鲁QE5T64', etype:'天然气', energy:'油气', driver:'苗朝外', phone:'15321952156', cust:'北京小桔科技集团有限公司', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', freight:488.00, sb:'启用', oilRate:'—', gasRate:'8%', eRate:'—', splitRate:'25%', node:'装货', splitTime:'2026-10-29 16:02:11', grant:122.00, used:45.87, avail:76.13, back:0.00, splitStatus:'已派发', ctime:'2026-10-29 15:58:40', op:true},
  {wb:'UD2026102800000012', status:'装货/在途', audit:'待审核', abn:'无异常', plate:'冀A8D32L', etype:'天然气', energy:'油气', driver:'高伟', phone:'13905318872', cust:'北京小桔科技集团有限公司', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', freight:520.00, sb:'启用', oilRate:'—', gasRate:'8%', eRate:'—', splitRate:'25%', node:'装货', splitTime:'2026-10-28 09:12:30', grant:130.00, used:0.00, avail:130.00, back:0.00, splitStatus:'已派发', ctime:'2026-10-28 09:10:05', op:true},
  {wb:'UD2026102600000005', status:'已卸货', audit:'审核通过', abn:'无异常', plate:'辽A·K84V3', etype:'电', energy:'电', driver:'马春林', phone:'134****5527', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:356.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-26 08:02:10', grant:89.00, used:46.68, avail:42.32, back:0.00, splitStatus:'已派发', ctime:'2026-10-26 07:58:33', op:true},
  {wb:'UD2026102600000014', status:'已卸货', audit:'审核通过', abn:'无异常', plate:'辽A·K84V3', etype:'电', energy:'电', driver:'马春林', phone:'134****5527', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:356.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-26 08:02:10', grant:89.00, used:18.60, avail:70.40, back:0.00, splitStatus:'已派发', ctime:'2026-10-26 07:58:33', op:true},
  {wb:'UD2026102500000002', status:'已取消', audit:'—', abn:'取消运单', plate:'晋A·7D2R9', etype:'电', energy:'电', driver:'刘志强', phone:'139****8834', cust:'宁波智赋科技', subj:'万联易达物流科技有限公司', freight:356.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-25 08:30:02', grant:89.00, used:0.00, avail:0.00, back:89.00, splitStatus:'已回收', ctime:'2026-10-25 08:22:18', op:false},
  {wb:'UD2026102400000009', status:'已卸货', audit:'审核通过', abn:'无异常', plate:'豫P·6F8K1', etype:'电', energy:'电', driver:'吴天佑', phone:'135****7742', cust:'北京小桔科技集团有限公司', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', freight:420.00, sb:'未启用', oilRate:'—', gasRate:'—', eRate:'—', splitRate:'—', node:'—', splitTime:'—', grant:0.00, used:0.00, avail:0.00, back:0.00, splitStatus:'未派发', ctime:'2026-10-24 19:40:51', op:false},
  {wb:'UD2026102300000018', status:'已卸货', audit:'审核通过', abn:'无异常', plate:'苏N·3M5T8', etype:'油', energy:'油气', driver:'陈国栋', phone:'131****4409', cust:'宁波市鄞州姜山物流有限公司', subj:'万联易达物流科技有限公司', freight:310.00, sb:'启用', oilRate:'4%', gasRate:'—', eRate:'—', splitRate:'20%', node:'装货', splitTime:'2026-10-23 11:32:40', grant:62.00, used:62.00, avail:0.00, back:0.00, splitStatus:'已派发', ctime:'2026-10-23 11:28:12', op:false},
  /* 分电充电进行中的电运单：额度处于冻结占用（可用＝分配−已用−冻结−已圈回），与充电订单/司机能源管理同源 */
  {wb:'UD2026102800000021', status:'装货/在途', audit:'审核通过', abn:'无异常', plate:'辽A·D81K2', etype:'电', energy:'电', driver:'王建国', phone:'138****4021', cust:'沈阳长鑫冷链物流有限公司', subj:'万联易达物流科技有限公司', freight:4180.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-28 07:32:10', grant:520.00, used:0.00, avail:0.00, back:0.00, frozen:520.00, splitStatus:'已派发', ctime:'2026-10-28 07:30:44', op:false},
  {wb:'UD2026102800000022', status:'装货/在途', audit:'审核通过', abn:'无异常', plate:'辽A·F52R9', etype:'电', energy:'电', driver:'刘志强', phone:'139****8834', cust:'沈阳鲜达供应链有限公司', subj:'万联易达物流科技有限公司', freight:356.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-28 08:15:44', grant:356.00, used:0.00, avail:0.00, back:0.00, frozen:356.00, splitStatus:'已派发', ctime:'2026-10-28 08:12:20', op:false},
  {wb:'UD2026102700000023', status:'已卸货', audit:'审核通过', abn:'无异常', plate:'辽A·J26M8', etype:'电', energy:'电', driver:'李长顺', phone:'135****3391', cust:'沈阳鲜达供应链有限公司', subj:'万联易达物流科技有限公司', freight:486.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-27 06:48:29', grant:486.00, used:0.00, avail:0.00, back:0.00, frozen:486.00, splitStatus:'已派发', ctime:'2026-10-27 06:45:11', op:false},
  {wb:'UD2026102500000024', status:'装货/在途', audit:'审核通过', abn:'无异常', plate:'辽A·N48S1', etype:'电', energy:'电', driver:'郑卫东', phone:'131****6642', cust:'沈阳长鑫冷链物流有限公司', subj:'万联易达物流科技有限公司', freight:398.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-25 06:30:12', grant:398.00, used:0.00, avail:0.00, back:0.00, frozen:398.00, splitStatus:'已派发', ctime:'2026-10-25 06:26:40', op:false},
  {wb:'UD2026102400000025', status:'装货/在途', audit:'审核通过', abn:'无异常', plate:'辽A·P63U9', etype:'电', energy:'电', driver:'冯玉梅', phone:'130****2285', cust:'鲁通冷链物流有限公司', subj:'万联易达物流科技有限公司', freight:287.00, sb:'启用', oilRate:'—', gasRate:'—', eRate:'12%', splitRate:'25%', node:'装货', splitTime:'2026-10-24 09:12:38', grant:287.00, used:0.00, avail:0.00, back:0.00, frozen:287.00, splitStatus:'已派发', ctime:'2026-10-24 09:08:15', op:false}
];

/* 能源规则配置（油气/电规则并存；电规则派发比例 ≤25%） */
LIVE.oilRules=[
  {name:'合肥欣中', subj:'万联易达物流科技有限公司', owner:'合肥颀中科技股份有限公司', etype:'油气', rate:'3%', gnode:'装车', rnode:'卸货后', way:'按运费比例', sub:'—', fence:'999999999', st:'启用', range:'2026-10-01 00:00:00——2026-11-30 23:59:59', ut:'2026-10-21 19:56:04', by:'平台超级管理员'},
  {name:'宁波智赋-电规则', subj:'万联易达物流科技有限公司', owner:'宁波智赋科技', etype:'电', rate:'25%', gnode:'装车', rnode:'卸货后', way:'按运费比例', sub:'司机补贴', fence:'99999999', st:'启用', range:'2026-10-01 00:00:00——2027-10-31 23:59:59', ut:'2026-10-26 20:01:02', by:'平台超级管理员'},
  {name:'小桔-太原电规则', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', owner:'北京小桔科技集团有限公司', etype:'电', rate:'20%', gnode:'装车', rnode:'卸货后结算前', way:'按运费比例', sub:'司机补贴', fence:'99999999', st:'启用', range:'2026-10-15 00:00:00——2027-10-15 23:59:59', ut:'2026-10-15 10:22:31', by:'李文静'},
  {name:'小桔-太原电规则(超限停用)', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', owner:'北京小桔科技集团有限公司', etype:'电', rate:'30%', gnode:'装车', rnode:'卸货后', way:'按运费比例', sub:'司机补贴', fence:'99999999', st:'停用', range:'2026-09-01 00:00:00——2026-09-30 23:59:59', ut:'2026-09-30 18:40:12', by:'李文静'},
  {name:'太原-无企业', subj:'太原万联易达供应链管理有限公司- ', owner:'（其他全部货主）', etype:'油气', rate:'30%', gnode:'装车', rnode:'货主结算后(7天)', way:'按运费比例', sub:'司机补贴', fence:'999999999', st:'启用', range:'2026-09-01 00:00:00——2027-10-07 23:59:59', ut:'2026-10-15 17:52:00', by:'平台超级管理员'},
  {name:'滴滴-芜湖', subj:'芜湖万联易达物流发展有限公司', owner:'北京小桔科技集团有限公司', etype:'油气', rate:'25%', gnode:'货主结算后（一笔付）', rnode:'货主结算后(7天)', way:'按运费比例', sub:'司机补贴', fence:'99999999', st:'启用', range:'2026-08-26 00:00:00——2027-10-31 23:59:59', ut:'2026-10-29 13:55:01', by:'平台超级管理员'},
  {name:'西安-太原', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', owner:'西安市临潼区梦甜电子商务商行（个体工商户）', etype:'油气', rate:'20%', gnode:'装车', rnode:'卸货后', way:'按运费比例', sub:'司机补贴，货主补贴', fence:'999999', st:'停用', range:'2026-08-01 00:00:00——2028-09-29 23:59:59', ut:'2026-10-21 20:07:34', by:'平台超级管理员'},
  {name:'宁波+太原', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', owner:'宁波智赋科技', etype:'油气', rate:'30%', gnode:'装车', rnode:'卸货后结算前(2天)', way:'按运费比例', sub:'司机补贴，货主补贴', fence:'99999999', st:'启用', range:'2026-08-01 00:00:00——2026-09-30 23:59:59', ut:'2026-08-13 09:55:04', by:'平台超级管理员'},
  {name:'鲁通冷链-电规则', subj:'鲁通冷链物流有限公司', owner:'山东鲁冰花物流有限公司', etype:'电', rate:'15%', gnode:'装车', rnode:'卸货后', way:'按运费比例', sub:'司机补贴', fence:'500', st:'启用', range:'2026-10-20 00:00:00——2027-10-20 23:59:59', ut:'2026-10-20 11:05:47', by:'张世民'},
  {name:'无货主企业+太原', subj:'八通物流- ', owner:'（其他全部货主）', etype:'油气', rate:'35%', gnode:'—', rnode:'货主结算后(2天)', way:'按运费比例', sub:'司机补贴', fence:'99999999', st:'停用', range:'2026-07-01 00:00:00——2027-08-27 23:59:59', ut:'2026-08-25 09:47:03', by:'平台超级管理员'}
];

/* 万联价计算配置（司机补贴规则）：柴油/天然气/电补贴比例（列表对齐现网 7 列，比例在编辑抽屉） */
LIVE.wljRules=[
  {subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', owner:'淘宝（中国）软件有限公司', oil:'5%', gas:'8%', elec:'12%', by:'平台超级管理员', ut:'2026-10-19 10:32:59', st:'正常'},
  {subj:'万联易达物流科技有限公司', owner:'宁波智赋科技', oil:'5%', gas:'6%', elec:'12%', by:'平台超级管理员', ut:'2026-10-26 09:15:40', st:'正常'},
  {subj:'芜湖万联易达物流发展有限公司', owner:'北京小桔科技集团有限公司', oil:'6%', gas:'10%', elec:'—', by:'平台超级管理员', ut:'2026-08-26 17:21:53', st:'正常'},
  {subj:'万联易达物流科技有限公司', owner:'天地华宇汽车租赁(上海)有限公司', oil:'5%', gas:'8%', elec:'—', by:'平台超级管理员', ut:'2026-08-18 18:16:18', st:'正常'},
  {subj:'万联易达物流科技有限公司', owner:'北京智者天下科技有限公司', oil:'4%', gas:'6%', elec:'10%', by:'苗丽娇', ut:'2026-07-31 09:49:02', st:'正常'},
  {subj:'万联易达物流科技有限公司', owner:'西安市临潼区梦甜电子商务商行（个体工商户）', oil:'5%', gas:'8%', elec:'—', by:'平台超级管理员', ut:'2026-09-07 13:18:08', st:'正常'},
  {subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', owner:'（其他全部货主）通用补贴配置', oil:'3%', gas:'5%', elec:'8%', by:'平台超级管理员', ut:'2026-07-31 19:04:19', st:'停用'},
  {subj:'北京便利蜂连锁商业有限公司', owner:'景德镇市景川物流有限公司', oil:'6%', gas:'—', elec:'—', by:'苗丽娇', ut:'2026-07-03 15:51:18', st:'停用'},
  {subj:'古交市骏马煤业有限公司', owner:'（其他全部货主）通用补贴配置', oil:'4%', gas:'6%', elec:'—', by:'平台超级管理员', ut:'2026-06-16 20:34:02', st:'正常'},
  {subj:'福鼎市路人传媒有限公司', owner:'（其他全部货主）通用补贴配置', oil:'5%', gas:'8%', elec:'—', by:'平台超级管理员', ut:'2026-06-04 21:06:01', st:'正常'}
];

/* 货主能源返利配置：以货主为主，一行=货主+N 个网货主体（每块含返利规则与多段占比区间）；本期区间新增电费率 */
LIVE.ownerRebates=[
  {owner:'北京小桔科技集团有限公司', subj:'芜湖万联易达物流发展有限公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'4',gas:'5',elec:'3'}], range:'2026-10-29 00:00:00——2027-11-12 23:59:59', by:'平台超级管理员', ut:'2026-10-29 13:53:08', st:'启用'},
  {owner:'北京小桔科技集团有限公司', subj:'万联易达物流科技有限公司', rule:'按能源额度', ranges:[{from:'0',to:'30',diesel:'3',gas:'4',elec:'2'}], range:'2026-10-29 00:00:00——2027-11-12 23:59:59', by:'平台超级管理员', ut:'2026-10-29 13:53:08', st:'启用'},
  {owner:'北京小桔科技集团有限公司', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', rule:'按费率', bindTip:true, ranges:[{from:'0',to:'10',diesel:'10',gas:'1.2',elec:'4'},{from:'10',to:'25',diesel:'3.67',gas:'4.89',elec:'2.5'},{from:'25',to:'40',diesel:'5.67',gas:'5.89',elec:'3'}], range:'2026-10-29 00:00:00——2027-11-12 23:59:59', by:'平台超级管理员', ut:'2026-10-29 13:53:08', st:'启用'},
  {owner:'宁波智赋科技', subj:'万联易达物流科技有限公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'1.5',gas:'2',elec:'2'}], range:'2026-10-20 00:00:00——2027-10-20 23:59:59', by:'张世民', ut:'2026-10-20 14:02:11', st:'启用'},
  {owner:'途达同城货运有限公司测试', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'2',gas:'1.2',elec:'1.5'}], range:'2026-10-25 00:00:00——2026-10-31 23:59:59', by:'合同中台', ut:'2026-10-27 14:59:34', st:'启用'},
  {owner:'途达同城货运有限公司测试', subj:'芜湖万联易达物流发展有限公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'2',gas:'1.2',elec:'1.5'}], range:'2026-10-01 00:00:00——2026-10-15 23:59:59', by:'平台超级管理员', ut:'2026-10-27 11:10:07', st:'停用'},
  {owner:'浙江车车多智慧物流有限公司', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', rule:'按费率', ranges:[{from:'0',to:'20',diesel:'4',gas:'5',elec:'3'},{from:'20',to:'40',diesel:'3',gas:'6',elec:'2'}], range:'2026-08-25 00:00:00——2027-09-29 23:59:59', by:'平台超级管理员', ut:'2026-10-14 19:44:14', st:'启用'},
  {owner:'浙江车车多智慧物流有限公司', subj:'万联易达物流科技有限公司', rule:'按能源额度', ranges:[{from:'0',to:'30',diesel:'3',gas:'4',elec:'2'}], range:'2026-08-25 00:00:00——2027-09-29 23:59:59', by:'平台超级管理员', ut:'2026-10-14 19:44:14', st:'启用'},
  {owner:'北京抖音科技有限公司', subj:'北京万联易达信息科技有限公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'2.5',gas:'1.5',elec:'1'}], range:'2026-08-24 00:00:00——2027-09-23 23:59:59', by:'平台超级管理员', ut:'2026-08-24 21:28:38', st:'启用'},
  {owner:'天地华宇汽车租赁(上海)有限公司', subj:'万联易达物流科技有限公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'2',gas:'1.2',elec:'1.5'}], range:'2026-08-18 00:00:00——2026-09-30 23:59:59', by:'平台超级管理员', ut:'2026-08-18 18:07:18', st:'启用'},
  {owner:'西安市临潼区梦甜电子商务商行（个体工商户）', subj:'太原万联易达供应链管理有限公司霍林郭勒分公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'2',gas:'1.2',elec:'1.5'}], range:'2026-04-01 00:00:00——2028-04-30 23:59:59', by:'平台超级管理员', ut:'2026-08-13 09:29:02', st:'启用'},
  {owner:'芜湖万联易达物流发展有限公司', subj:'万联易达物流科技有限公司', rule:'按费率', ranges:[{from:'1',to:'40',diesel:'2',gas:'1.2',elec:'1.5'}], range:'2026-06-01 00:00:00——2027-06-30 23:59:59', by:'平台超级管理员', ut:'2026-07-15 14:18:05', st:'启用'}
];

const etypeTag=t=>t==='电'?'<span class="tag ok">电</span>':t==='油'?'<span class="tag f">油</span>':'<span class="tag">'+t+'</span>';
const energyTag=t=>t==='电'?'<span class="tag ok">电</span>':'<span class="tag f">油气</span>';

/* —— 能源运单管理（列表：现网 31 列 + 电补贴比例） —— */
VIEWS.driverWaybills=()=>{
  const list=liveRows('driverWaybills');
  const rows=list.map((d,i)=>'<tr>'
    +'<td class="num">'+(i+1)+'</td>'
    +'<td><b class="mono">'+d.wb+'</b></td>'
    +'<td>'+d.status+'</td>'
    +'<td>'+d.audit+'</td>'
    +'<td>'+(d.abn==='无异常'?'<span class="t2">无异常</span>':'<span style="color:#c0483c">'+d.abn+'</span>')+'</td>'
    +'<td class="mono">'+d.plate+'</td>'
    +'<td>'+etypeTag(d.etype)+leqiFieldHelp('etypeTip')+'</td>'
    +'<td>'+energyTag(d.energy)+'</td>'
    +'<td>'+d.driver+'</td>'
    +'<td class="mono">'+d.phone+'</td>'
    +'<td>'+d.cust+'</td>'
    +'<td>'+d.subj+'</td>'
    +'<td class="num">'+money(d.freight)+'</td>'
    +'<td>'+d.sb+'</td>'
    +'<td class="num">'+d.oilRate+'</td>'
    +'<td class="num">'+d.gasRate+'</td>'
    +'<td class="num">'+(d.eRate==='—'?'<span class="t2">—</span>':d.eRate)+leqiFieldHelp('eRateTip')+'</td>'
    +'<td class="num">'+(d.splitRate==='—'?'<span class="t2">—</span>':d.splitRate)+'</td>'
    +'<td>'+d.node+'</td>'
    +'<td class="mono">'+d.splitTime+'</td>'
    +'<td class="num">'+money(d.grant)+'</td>'
    +'<td class="num">'+money(d.used)+'</td>'
    +'<td class="num"><b>'+money(d.avail)+'</b></td>'
    +'<td class="num">'+(d.energy==='电'?(d.frozen?'<b style="color:#d46b08">'+money(d.frozen)+'</b>':money(0)):'<span class="t2">—</span>')+'</td>'
    +'<td class="num">'+money(d.back)+'</td>'
    +'<td>'+d.splitStatus+'</td>'
    +'<td class="mono">'+d.ctime+'</td>'
    +'<td class="acts">'+(d.op?'<button type="button" onclick="liveModal(\'wbBack\',\''+d.wb+'\')">能源圈回</button>':'<span class="t2">—</span>')+'</td></tr>');
  return liveFilters('driverWaybills')
    +liveListCard('能源运单管理','<button class="btn sm" onclick="liveModal(\'wbBackBatch\',\'\')">批量能源圈回</button><button class="btn sm" onclick="liveExport(\'driverWaybills\')">导出</button>',
      ['序号','运单号','运单状态','运单预审状态','运单异常类型','车牌号','车辆能源类型'+leqiFieldHelp('etypeTip'),'能源类型','司机姓名','手机号','客户名称','网络货运主体','应付司机总运费(元)','司机补贴状态','柴油补贴比例','天然气补贴比例','电补贴比例'+leqiFieldHelp('eRateTip'),'派发比例','派发节点','派发时间','分配额度(元)','已使用额度(元)','可用额度(元)','冻结额度(元)'+leqiFieldHelp('wbFrozenTip'),'已圈回额度(元)','派发状态','运单创建时间','操作'],
      rows,'3420px')
    +notes(
      nb('能源类型与能源额度','<p><b>车辆能源类型</b>装车时按车辆档案写入（枚举：柴油/天然气/电/油）；<b>能源类型</b>是额度账本口径（枚举：油气/电）——柴油、天然气、油 → 油气；电 → 电。</p><p><b>额度字段不再区分油气/电</b>：「分配额度 / 已使用额度 / 可用额度 / 已圈回额度」为同一套字段，按运单能源类型取对应账本金额：能源类型=电取电账本，能源类型=油气取油气账本。</p>')+
      nb('额度口径（含冻结）','<p>四个额度列满足等式：<b>分配额度 ＝ 已使用额度 ＋ 冻结额度 ＋ 可用额度 ＋ 已圈回额度</b>。<b>冻结额度仅电有</b>：司机发起充电时按冻结池<b>全额冻结</b>该运单额度（充电中/待支付期间一直占用），完成后按万联价×实际度数扣减、剩余解冻回可用，启动失败关单则全额解冻退回；油气运单该列显示「—」（加注冻结在司机维度，不落运单）。</p><p>三处同源：运单「冻结额度」、司机能源管理「电-冻结额度」（＝该司机名下进行中订单冻结合计）、充电订单详情「冻结总额度」（＝冻结池内各运单冻结之和）。</p>')+
      nb('装车判断','<p>装车时按「<b>车辆能源类型＋网货主体＋货主企业</b>」匹配生效的派发规则：匹配到才生成运单额度数据，未匹配到不生成（额度列显示 0 或 —，派发状态=未派发）；能源类型=电走电规则（在能源规则配置页维护）。</p>'));
};

/* —— 能源规则配置（现网字段 + 本期新增能源类型/分电上限比例配置；三维唯一） —— */
let liveCapOil=25.55, liveCapElec=25.00;   /* 分油/分电上限比例（演示值，0–40 两位小数） */
VIEWS.oilRules=()=>{
  const list=liveRows('oilRules');
  const rows=list.map((d,i)=>'<tr>'
    +'<td class="num">'+(i+1)+'</td>'
    +'<td>'+d.name+'</td>'
    +'<td>'+d.subj+'</td>'
    +'<td>'+d.owner+'</td>'
    +'<td>'+etypeTag(d.etype)+leqiFieldHelp('etypeTip')+'</td>'
    +'<td class="num">'+(d.etype==='电'&&d.rate!=='—'?'<b style="color:'+(parseFloat(d.rate)>liveCapElec?'#c0483c':'#1a7f4b')+'">'+d.rate+'</b>':d.rate)+leqiFieldHelp('eRateCap')+'</td>'
    +'<td>'+d.gnode+'</td>'
    +'<td>'+d.rnode+'</td>'
    +'<td>'+d.way+'</td>'
    +'<td>'+d.sub+'</td>'
    +'<td class="num">'+d.fence+'</td>'
    +'<td>'+(d.st==='启用'?'<span class="tag ok">启用</span>':'<span class="tag">停用</span>')+'</td>'
    +'<td class="mono">'+d.range+'</td>'
    +'<td class="mono">'+d.ut+'</td>'
    +'<td>'+d.by+'</td>'
    +'<td class="acts"><button type="button" onclick="openRuleEdit(\'oilRuleEdit\',\'oilRule\',\''+d.name+'\')">编辑</button><button type="button" onclick="showToast(\'已'+(d.st==='启用'?'停用':'启用')+'（演示）\')">'+(d.st==='启用'?'停用':'启用')+'</button></td></tr>');
  return liveFilters('oilRules')
    +liveListCard('能源规则配置','<button class="btn sm primary" onclick="openRuleEdit(\'oilRuleEdit\',\'oilRule\',null)">添加规则</button><button class="btn sm" onclick="showToast(\'特殊规则配置（演示入口）\')">特殊规则配置</button><button class="btn sm" onclick="liveModal(\'oilCap\',\'\')">分油上限比例配置</button><button class="btn sm" onclick="liveModal(\'elecCap\',\'\')">分电上限比例配置</button><button class="btn sm" onclick="liveExport(\'oilRules\')">导出</button>',
      ['序号','规则名称','适用网货主体','货主企业','能源类型'+leqiFieldHelp('etypeTip'),'派发比例'+leqiFieldHelp('eRateCap'),'派发节点','回收节点','能源派发方式','是否有补贴','电子围栏范围(米)','状态','规则时间范围','更新时间','操作人','操作'],
      rows,'2600px')
    +notes(
      nb('三维唯一','<p>「<b>网货主体＋货主企业＋能源类型</b>」组合至多一条生效规则（油气与电分开校验：同一组合可并存一条油气规则和一条电规则）；保存与启用均校验组合冲突，冲突拦截提示。</p>')+
      nb('分电上限比例配置','<p>本期新增「<b>分电上限比例配置</b>」入口（与「分油上限比例配置」并列）：配置分电比率上限，输入 0–40、最多两位小数，当前演示值 '+liveCapElec.toFixed(2)+'%。能源类型=电 的规则派发比例不得超过该上限，添加/编辑保存时校验，超过拦截；列表中超限的存量规则比例显示红色。油气规则沿用「分油上限比例配置」（当前演示值 '+liveCapOil.toFixed(2)+'%）。</p>'));
};

/* —— 万联价计算配置（司机补贴规则：现网 7 列，比例在编辑抽屉） —— */
VIEWS.wljRules=()=>{
  const list=liveRows('wljRules');
  const rows=list.map((d,i)=>'<tr>'
    +'<td class="num">'+(i+1)+'</td>'
    +'<td>'+d.subj+'</td>'
    +'<td>'+d.owner+'</td>'
    +'<td>'+d.by+'</td>'
    +'<td class="mono">'+d.ut+'</td>'
    +'<td>'+(d.st==='正常'?'<span class="tag ok">正常</span>':'<span class="tag">停用</span>')+'</td>'
    +'<td class="acts"><button type="button" onclick="openRuleEdit(\'wljRuleEdit\',\'wljRule\',\''+d.owner+'\')">编辑</button><button type="button" onclick="showToast(\'已'+(d.st==='正常'?'停用':'启用')+'（演示）\')">'+(d.st==='正常'?'停用':'启用')+'</button></td></tr>');
  return liveFilters('wljRules')
    +liveListCard('万联价计算配置','<button class="btn sm primary" onclick="openRuleEdit(\'wljRuleEdit\',\'wljRule\',null)">添加司机补贴规则</button>',
      ['序号','网货主体','货主企业','操作人','更新时间','状态','操作'],
      rows,'1500px')
    +notes(
      nb('电补贴比例','<p>司机补贴规则在柴油/天然气补贴比例之外增加<b>电补贴比例（y）</b>（编辑抽屉内配置）：用于计算电的万联价——订单创建时按司机补贴规则记录万联价快照，司机扣款＝万联价×实际充电度数，补贴金额＝云快充金额−万联价扣款（差额）。未配置电补贴比例的组合，电运单不参与分电与补贴计算。</p>')+
      nb('万联价公式','<p>万联价＝按司机补贴规则补贴比例计算的电单价（订单创建时快照）；计算公式以本配置页最终口径为准（公式更新后以此处展示为准）。</p>'));
};

/* —— 货主能源返利配置（现网 9 列，费率在编辑抽屉） —— */
VIEWS.ownerRebates=()=>{
  const list=liveRows('ownerRebates');
  const rows=list.map((d,i)=>'<tr>'
    +'<td class="num">'+(i+1)+'</td>'
    +'<td>'+d.owner+'</td>'
    +'<td>'+d.subj+'</td>'
    +'<td>'+d.rule+'</td>'
    +'<td class="mono">'+d.range+'</td>'
    +'<td>'+d.by+'</td>'
    +'<td class="mono">'+d.ut+'</td>'
    +'<td>'+(d.st==='启用'?'<span class="tag ok">启用</span>':'<span class="tag">停用</span>')+'</td>'
    +'<td class="acts"><button type="button" onclick="openRebateEdit(\''+d.owner+'\')">编辑</button><button type="button" onclick="showToast(\'已'+(d.st==='启用'?'停用':'启用')+'（演示）\')">'+(d.st==='启用'?'停用':'启用')+'</button></td></tr>');
  return liveFilters('ownerRebates')
    +liveListCard('货主能源返利配置','<button class="btn sm primary" onclick="openRebateEdit(null)">添加货主配置</button><button class="btn sm" onclick="liveExport(\'ownerRebates\')">导出</button>',
      ['序号','货主企业名称','网货主体','返利规则','规则时间','操作人','更新时间','状态','操作'],
      rows,'1700px')
    +notes(nb('电费率与区间配置','<p>货主返利按「网货主体 + 占比区间」配置：每个网货主体可配置多段能源占比区间（最多 35 段，达到上限后不再展示「添加范围」），<b>每段区间分别配置柴油、天然气、电</b>三项比例。返利规则为「按费率」时名称＝柴油/天然气/电<b>优惠费率</b>；为「按能源额度」时名称＝柴油/天然气/电<b>返利比例</b>，均必填（0–100）。电返利按「电费金额×电优惠费率」计算，<b>复用能源返利链路</b>（返利随充电订单同步 4PL 记录）。同一网货主体下多段区间的起点须小于终点、且互不重叠。</p>'));
};

/* 用覆盖后的页面重新渲染当前页。旧版企业端日/月账单继续使用原有实现。 */
go(current);
