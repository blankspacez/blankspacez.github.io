(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{474:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("p",[s("font",{attrs:{size:"4"}},[t._v("摘要")])],1),t._v(" "),s("p",[t._v("机器学习实训课程笔记 😈 😈 😈")]),t._v(" "),s("p",[t._v("开发工具："),s("code",[t._v("annaconda")]),t._v(" + "),s("code",[t._v("jupyter notebook")])])]),s("h2",{attrs:{id:"时序特征处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时序特征处理"}},[t._v("#")]),t._v(" 时序特征处理")]),t._v(" "),s("p",[t._v("在进行数据分析或量化研究时，总避免不了时间序列数据的处理，时间序列是指在一定时间内按时间顺序测量的某个变量的取值序列。常见的时间序列数据有一天内随着时间变化的温度序列，又或者交易时间内不断波动的股票价格序列等等。")]),t._v(" "),s("p",[t._v("pandas提供了各种时序特征处理的函数接口。")]),t._v(" "),s("blockquote",[s("p",[t._v("参考文章"),s("br"),t._v("\n👉"),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/106675563",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pandas数据处理——玩转时间序列数据"),s("OutboundLink")],1),s("br"),t._v("\n👉"),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/388551117",target:"_blank",rel:"noopener noreferrer"}},[t._v("时间序列数据的特征工程总结"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("关于特征处理，可以注册一个Kaggle进行学习。")]),t._v(" "),s("h2",{attrs:{id:"tsfresh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfresh"}},[t._v("#")]),t._v(" tsfresh")]),t._v(" "),s("p",[t._v("tsfresh 用于从时间序列或其他序列数据中进行系统特征工程。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://tsfresh.readthedocs.io/en/latest/text/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tsfresh官网"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("利用tsfresh来提取时序特征十分方便，只需要调用库函数即可，如果利用pandas来一步步手动计算、提取特征，那么过程会非常繁琐。")]),t._v(" "),s("div",{staticClass:"language-py line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tsfresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("examples"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("robot_execution_failures "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" download_robot_execution_failures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("load_robot_execution_failures\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载数据集")]),t._v("\ntimeseries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" load_robot_execution_failures"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#timeseries为DataFrame类型的Data，y为Target")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 某一列的特征可视化")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" matplotlib"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pyplot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\ntimeseries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("timeseries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subplots "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sharex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("figsize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ntimeseries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("timeseries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("88")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subplots "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sharex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("figsize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提取特征")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tsfresh "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" extract_features\n\nextract_features "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" extract_features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timeseries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("column_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("column_sort"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'time'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nextract_features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("head"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tsfresh "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" select_features\nextract_features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fillna"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("inplace"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nX_selected "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" select_features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("extract_features"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 机器学习")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ensemble "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" RandomForestClassifier\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model_selection "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" train_test_split\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" metrics\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#训练")]),t._v("\nX_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("X_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" train_test_split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X_selected"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("test_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrf "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RandomForestClassifier"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n_estimators"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("max_depth"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_train"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看模型预测效果")]),t._v("\npred "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("predict_proba"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nfpr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tpr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" metrics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("roc_curve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("pred"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmetrics"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fpr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tpr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);