// == Import : npm
import React from "react";

// == Import : local
import "./styles.css";

// == Composant
const Home = () => (
  <div className="home row align-items-center pt-5 mx-1">
    <img
      className="col-xl-4 col-lg-3 d-none d-lg-block"
      src="https://lh3.googleusercontent.com/n7P-Icu0SYUFLM_1lOeE_wrCPlcVrN2xH012-i2yBpjepWHw27HPZwkaews6qKReYrCpA8BQNsLCWN7t0SUD9LOlL_-x4Y8AQlou8A6vzAaGYeHAJLCBHr7rbOziP4Jn4T3TXrPBHNY79qoP1JB0Pis-uxsd5ThpFeWcErF9bzkt3N7vX92TieOM_Bpb9Iz563kkQFQqB71JxckYnFMgy5HFw1HMNFugqb4FrN_-d-z_uv7G9URq-pYAAG0zHXWiEwxbdI-g2eKNwV920IgpUIVO5sGeqUSCkGGWIih_cTBoxpheV6D5KhuCUyr0x4oaF6B55-_bowEH21_pDplfUN8AvkxEmrrMMnZ-_VsL2r_64Y1gfeTfauAmRVCln6Nr8IE74fzgnJLhYAnPnEopFYVtHtHX0gbOfhl9ZA2RIHiUKAahIrMV5wm4cMCQOVwyI0t4zQM5rWPDRKAAo9ixEschwVA7Vswfnp6rE0ukNfksz_fCzNXiOvQ2s_iKpJVfzPOKtN6goKu2pNMpI2uo-2yZs46iKHUry5aVl4ZV3g_wnqTGja75Zg_G_cY13UHDV1BXIqCxBStrh_yOfZPeedxNjpd169VPpM5_AOP_m4UQeolLqZdiNk80T3ZGPW8I0ubrqCHlQcm40HS0JaC_4BqINGINSjjzwSOriEJ9poLgaeZULBYyyghOU-IMgOB_7eGot4Qn2sVk_dlT8CeDShj8zcgbOLiAFj_OTUotOJdZB7DGaZEIHvA=w562-h757-no"
      alt="Blandine Jet"
    />
    <div className="col-xl-8 col-lg-9">
      <h1>Blandine Jet</h1>
      <h2 className="mt-2">Scénariste - dialoguiste - réalisatrice</h2>
      <p className="mt-4 mb-0">
        Après 20 années passées au théâtre et consacrées à l’écriture, à la mise
        en scène et à la direction d’acteurs, Blandine se reconvertit en 2015 à
        l’écriture cinématographique. Depuis elle coécrit les scénarios de
        plusieurs courts métrages et longs métrages, en collaboration avec leurs
        réalisateurs. Elle est régulièrement engagée par des productions comme
        consultante sur des projets de fiction et de documentaire. Elle
        travaille également à ses propres projets de films, dont le long métrage
        Le bruit des anges, actuellement en développement chez Sombrero Films.
      </p>
    </div>
  </div>
);

// == Export
export default Home;
