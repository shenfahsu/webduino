var GameImage_example = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="=n)]{%I5-U[EV#-5`S.:">Degree1to25</variable><variable type="" id="DJ#88oNr]})yT3|(kaG~">interval</variable><variable type="" id="qw6u(C%^I^847ZF6oKz8">Count</variable><variable type="" id=":hhSlcC+u/(_Q5@@coVc">i</variable><variable type="" id=":^gy4Mxeyj6UmPod@]ts">showImgTimer</variable><variable type="" id="6Yw1]o-D$Cam{OtwN6Y=">j</variable><variable type="" id="X`p`E?3R]:FxD-~rik{w">onClickTimer</variable><variable type="" id="+C2$ai(EJZPqg[F~a;^{">k</variable></variables><block type="setscreen" id="%Z*mn;:{{F(/(Y`aztV2" x="-388" y="-631"><value name="left"><block type="math_number" id="22ew47Y_+:[I3zm:MTHY"><field name="NUM">500</field></block></value><value name="top"><block type="math_number" id="0_jy_];R7$g[e``u|9?U"><field name="NUM">150</field></block></value><value name="width"><block type="math_number" id="Kb,XB,UT1UK/,;`iyX@x"><field name="NUM">350</field></block></value><value name="height"><block type="math_number" id="QQ[R}FR]vL1*ey~g6j3?"><field name="NUM">350</field></block></value><next><block type="variables_set" id="rc`rORU,M|{!~!QmCEZv"><field name="VAR" id="=n)]{%I5-U[EV#-5`S.:" variabletype="">Degree1to25</field><value name="VALUE"><block type="math_number" id="}LYjduw)wqR`AjGqYfk-"><field name="NUM">10</field></block></value><next><block type="variables_set" id="C|e?]3IHNi:TfPa5/GpE"><field name="VAR" id="DJ#88oNr]})yT3|(kaG~" variabletype="">interval</field><value name="VALUE"><block type="math_number" id="P0a*YDKY^0TWay3aw6lx"><field name="NUM">800</field></block></value><next><block type="variables_set" id="L/UtCRu::Cr0)|I-FG-j"><field name="VAR" id="qw6u(C%^I^847ZF6oKz8" variabletype="">Count</field><value name="VALUE"><block type="math_number" id="@dQ672+uYNfPg%Nmbmw`"><field name="NUM">25</field></block></value><next><block type="showtext" id="QP`_NMRCBadGzSj*=Nb!"><value name="size"><block type="math_number" id="L}tx(E5f+#s/wA:RQm]6"><field name="NUM">30</field></block></value><value name="color"><block type="colour_picker" id="gu]`+c=2r#dN}j;qJkOj"><field name="COLOUR">#ff0000</field></block></value><value name="text"><block type="variables_get" id="4_(mN}~!~RzITMOOHjT+"><field name="VAR" id="qw6u(C%^I^847ZF6oKz8" variabletype="">Count</field></block></value><next><block type="controls_for" id="DG5:,*EP`Y_eV%{P7aV#"><field name="VAR" id=":hhSlcC+u/(_Q5@@coVc" variabletype="">i</field><value name="FROM"><block type="math_number" id="U+NZ.Nr!~|NX4FLa:c3G"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="c+tNTMjVdvnNO!lzgh.V"><field name="NUM">25</field></block></value><value name="BY"><block type="math_number" id="2egb=Li?rvBZ[t9BNgr,"><field name="NUM">1</field></block></value><statement name="DO"><block type="image_create" id=";5aD_opi7fwXm6P`s1=d"><value name="id_"><block type="variables_get" id="#}/fukzhb80Yln`gaDHp"><field name="VAR" id=":hhSlcC+u/(_Q5@@coVc" variabletype="">i</field></block></value><value name="url_"><block type="text" id="7)4S2C;wC|ObZN^q0oCh"><field name="TEXT">https://pic.pimg.tw/yide168/1512182509-918346.png</field></block></value><value name="width_"><block type="math_number" id="f!vWB/bh(+]v}!u`M%Zi"><field name="NUM">60</field></block></value><value name="height_"><block type="math_number" id="kC3eogt.s3#XwTK3oy{K"><field name="NUM">60</field></block></value><value name="left_"><block type="math_arithmetic" id="~Jjf_9iU!.].s@1y~moq"><field name="OP">ADD</field><value name="A"><block type="math_number" id="?}L9f./aaqP7]sWaphph"><field name="NUM">8</field></block></value><value name="B"><block type="math_arithmetic" id=":VA=YNN+L~D6PYE2dp-n"><field name="OP">MULTIPLY</field><value name="A"><block type="math_modulo" id="voLsL@I_?g)nnjK}p8]P"><value name="DIVIDEND"><block type="math_arithmetic" id="WkmBwsI4%(a9uN`fsnX."><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="c}OB(ECc9aly(`P+8H`u"><field name="VAR" id=":hhSlcC+u/(_Q5@@coVc" variabletype="">i</field></block></value><value name="B"><block type="math_number" id="*fplfqn*U]J#4!6YL7@b"><field name="NUM">1</field></block></value></block></value><value name="DIVISOR"><block type="math_number" id="meVX04|sqoJv4vUbar%v"><field name="NUM">5</field></block></value></block></value><value name="B"><block type="math_number" id="F4ANh!WTMEOUTE:u/*u9"><field name="NUM">60</field></block></value></block></value></block></value><value name="top_"><block type="math_arithmetic" id="oDKBG}S;l:_8%lS=`K81"><field name="OP">ADD</field><value name="A"><block type="math_number" id="QApSgthpsE@gY!(0dFZw"><field name="NUM">30</field></block></value><value name="B"><block type="math_arithmetic" id="T-z6;QWo9T|Wt3(Y8UP1"><field name="OP">MULTIPLY</field><value name="A"><block type="math_round" id="y^@1lHuNnEeY;.Zn2T02"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic" id="Y;+8G;v3i(prC.Ks4VNh"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic" id="OgEiV~=J)U5@1jPj57)F"><field name="OP">MINUS</field><value name="A"><block type="variables_get" id="U!X!PW8@Nxf^AzI(WZx~"><field name="VAR" id=":hhSlcC+u/(_Q5@@coVc" variabletype="">i</field></block></value><value name="B"><block type="math_number" id="6zW7mZ4b8IA5aWKewu[d"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number" id="CO`e0,12@J2?4f7;E9ZO"><field name="NUM">5</field></block></value></block></value></block></value><value name="B"><block type="math_number" id="}lPT!sp2vs[po~_b_xz0"><field name="NUM">60</field></block></value></block></value></block></value><value name="zindex_"><block type="math_number" id="OI-4JxJUdL62mz?Jpdbh"><field name="NUM">0</field></block></value><value name="display_"><block type="logic_boolean" id="AIBzVWz1]HfUH*)x9_qX"><field name="BOOL">FALSE</field></block></value></block></statement><next><block type="document_timer" id="w*j/*Wm72d;s^4x,lUfB"><field name="fuTimer_" id=":^gy4Mxeyj6UmPod@]ts" variabletype="">showImgTimer</field><value name="intervals_"><block type="variables_get" id="@Bqgt]+z3aJD.|N{.)A|"><field name="VAR" id="DJ#88oNr]})yT3|(kaG~" variabletype="">interval</field></block></value><statement name="do_"><block type="controls_for" id="yGHcQ{H@V_b:3q*IsT^s"><field name="VAR" id="6Yw1]o-D$Cam{OtwN6Y=" variabletype="">j</field><value name="FROM"><block type="math_number" id="}vz1gd!PBae+R!c)^[Cc"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="[JH-DlA/w|BUi_Tfbfy="><field name="NUM">25</field></block></value><value name="BY"><block type="math_number" id="VDY%pz5OiVIJrs1nDqj_"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if" id="H49:5UN#m`EyhAL8.li+"><value name="IF0"><block type="logic_compare" id="99MHE76oweP}L^x/g1h|"><field name="OP">EQ</field><value name="A"><block type="image_get" id="f%tGyP[#usEV,OTUnkwu"><field name="property_">exist</field><value name="id_"><block type="variables_get" id="ICsjzRqn,~}cWuA+q3+Z"><field name="VAR" id="6Yw1]o-D$Cam{OtwN6Y=" variabletype="">j</field></block></value></block></value><value name="B"><block type="math_number" id="yj/WPe5+Oy(I^5y[}G:T"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_if" id="1hB{|ddnn`bpI2]!9(GD"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="fDd+HMsA{^QfXG5tmeRG"><field name="OP">EQ</field><value name="A"><block type="math_random_int" id="RhivazIlCm:bTGh=IW,2"><value name="FROM"><block type="math_number" id="J+?FNu.hdF7UzoJw8QZz"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get" id="jY%#j]d*9-jQ3Iy,S:rf"><field name="VAR" id="=n)]{%I5-U[EV#-5`S.:" variabletype="">Degree1to25</field></block></value></block></value><value name="B"><block type="math_number" id="8a`ChFwxGjY3:lM%I#!*"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="image_set" id="kz{Icz1JfqbVx?T4`lr/"><field name="property_">display</field><value name="id_"><block type="variables_get" id="^`W=CA2p,p[M@)nZeIE@"><field name="VAR" id="6Yw1]o-D$Cam{OtwN6Y=" variabletype="">j</field></block></value><value name="value_"><block type="logic_boolean" id="yj)L-e~r6vxR4j2f1(*D"><field name="BOOL">TRUE</field></block></value></block></statement><statement name="ELSE"><block type="image_set" id="cx44%jn/5WNyRdEv3^.C"><field name="property_">display</field><value name="id_"><block type="variables_get" id="PpO22t|pYbsm{Mp|cT/S"><field name="VAR" id="6Yw1]o-D$Cam{OtwN6Y=" variabletype="">j</field></block></value><value name="value_"><block type="logic_boolean" id="XBrn?Z(3Oq|8iPcGr8:n"><field name="BOOL">FALSE</field></block></value></block></statement></block></statement></block></statement></block></statement><next><block type="document_timer" id="d`Szv{P(.Sx{_i][4{zO"><field name="fuTimer_" id="X`p`E?3R]:FxD-~rik{w" variabletype="">onClickTimer</field><value name="intervals_"><block type="math_number" id="Mdpsq}=I,P`_14{G~g-C"><field name="NUM">10</field></block></value><statement name="do_"><block type="controls_for" id="wl+[E`ffrPZBY7by{94g"><field name="VAR" id="+C2$ai(EJZPqg[F~a;^{" variabletype="">k</field><value name="FROM"><block type="math_number" id=")0G?jeE1q2g9!BidPdJ["><field name="NUM">1</field></block></value><value name="TO"><block type="math_number" id="}aHfX-!z/:pQD/b-0.q:"><field name="NUM">25</field></block></value><value name="BY"><block type="math_number" id="8gwF]CFfm~+;!_2{neBd"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if" id="Yk8%,6|~W7D;GNxze7)w"><value name="IF0"><block type="logic_compare" id="0@7yd^N01*}vz?Uas{Mj"><field name="OP">EQ</field><value name="A"><block type="image_onclick_get" id="V#k-gPBNj8rPY{v0Vy,H"><value name="id_"><block type="variables_get" id="smn_fT,_D4vpQ.c(4S42"><field name="VAR" id="+C2$ai(EJZPqg[F~a;^{" variabletype="">k</field></block></value></block></value><value name="B"><block type="math_number" id="O/lJOn+uf(VbK:Qj,[vM"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="math_change" id=".D1gY6(MrT6Nb,o-2[6}"><field name="VAR" id="qw6u(C%^I^847ZF6oKz8" variabletype="">Count</field><value name="DELTA"><block type="math_number" id="m9R`0{|Xaesg#149/e:}"><field name="NUM">-1</field></block></value><next><block type="image_delete" id=".hh[(J!?n)7h^}.36lrv"><value name="id_"><block type="variables_get" id="lWVg70VF9Ox,DM6thI+m"><field name="VAR" id="+C2$ai(EJZPqg[F~a;^{" variabletype="">k</field></block></value><next><block type="showtext" id="Gw!hRFm4]XUw1S0Up{1v"><value name="size"><block type="math_number" id="._5u|O]S(rc#:=T1s]k3"><field name="NUM">30</field></block></value><value name="color"><block type="colour_picker" id="x/L1?{tQ*hc[#CT^Gi?k"><field name="COLOUR">#ff0000</field></block></value><value name="text"><block type="variables_get" id="3@or(nAU-Dam_Musn5P-"><field name="VAR" id="qw6u(C%^I^847ZF6oKz8" variabletype="">Count</field></block></value></block></next></block></next></block></statement></block></statement><next><block type="controls_if" id="Fci#]^zFp%,}!bmd:C6e"><value name="IF0"><block type="logic_compare" id="E?_oCmUaOta,;0[JcnyS"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="OPJIPvY[LIY+2[fQjZ#~"><field name="VAR" id="qw6u(C%^I^847ZF6oKz8" variabletype="">Count</field></block></value><value name="B"><block type="math_number" id="t9b9+Sx9hh3_pw5QQ+u."><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="document_timer_stop" id="%.V+DvnD*Wq|d]u]nh3,"><field name="fuTimer_" id=":^gy4Mxeyj6UmPod@]ts" variabletype="">showImgTimer</field><next><block type="document_timer_stop" id="gp@]YmDb*=}kr,y%(I/="><field name="fuTimer_" id="X`p`E?3R]:FxD-~rik{w" variabletype="">onClickTimer</field></block></next></block></statement></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';
