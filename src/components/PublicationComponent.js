import React from 'react';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Publication() {

    return (
      <div className="col-12 col-md-10 body">
        <h5>Publications</h5>
        <div className="divider"></div>
        <Tabs defaultActiveKey="journals" id="publication-tab">
          <Tab eventKey="journals" title="Journal">
            <ul className="list-unstyled mt-4 mb-4">
              <p className="publication-item">
                <span>1</span> Ranjeet Rout, Santi P. Maity, Pabitra Pal
                Chowdhury, Jayanta Kumar Das, Sk. Sarif Hassan, Hori Mohan
                Pandey, Analysis of Boolean functions based on Interaction
                graphs and their infuence in System Biology, 32(12), 7803-7821,
                Neural Computing and Applications, Springer, 2020
              </p>
              <p className="publication-item">
                <span>2</span> Abhijit Bhowmik, Gopal Ch. Das, Sanjoy Dhar Ray,
                Sumit Kundu, Santi P. Maity, Allocation of Optimal Energy in an
                Energy-Harvesting Cooperative Multi-band Cognitive Radio
                Network, 26(2), 1033-1043, Wireless Networks, Springer Verlag,
                2020
              </p>
              <p className="publication-item">
                <span>3</span> Avik Banerjee and Santi P. Maity, On Residual
                Energy Maximization in DF Cognitive Radio Networks with Multiple
                Eavesdroppers, 6(2), 718-727, IEEE Transactions on Cognitive
                Communications and Networking, 2020
              </p>
              <p className="publication-item">
                <span>4</span> Srijit Chowdhury, Abderrahim Benslimane and
                Chandan Giri, Non-Cooperative Gaming for Energy Efficient
                Congestion Control in 6LoWPAN, Accepted for Publication in IEEE
                Internet of Things Journal, 2020
              </p>
              <p className="publication-item">
                <span>5</span> Nashreen Nesa and Indrajit Banerjee, Combining
                Merkle Hash Tree and Chaotic Cryptography for Secure Data Fusion
                in IoT, 35, 85--105, Trans. Comput. Sci., 2020
              </p>
            </ul>
          </Tab>
          <Tab eventKey="conference" title="Conference">
            <ul className="list-unstyled mt-4 mb-4">
              <p className="publication-item">
                <span>1</span> A.Pal, S.Kandar, B.C.Dhara, Generation of pseudo
                random sequence using Regula-Falsi method, ICMC 2020, Springer,
                2020
              </p>
              <p className="publication-item">
                <span>2</span> Avik Banerje and Santi P. Maity, Cognitive radio
                networks with energy harvesting and eavesdropping-emulation
                resilience, Proc. 12th Int. Conf. on COMSNETS, 2020
              </p>
              <p className="publication-item">
                <span>3</span> Avik Banerjee and Santi P. Maity, PUEA impact on
                sensing and throughput in RF powered cognitive radio networks,
                Proc. 5th Int. Congress on Information and Communication
                Technology (ICICT 2020), London, 19-20th February, 2020, 2020
              </p>
              <p className="publication-item">
                <span>4</span> Tapobrata Dhar, Surajit Kumar Roy and Chandan
                Giri, Hardware Trojan Detection by Stimulating Transitions in
                Rare Nets, Accepted for publication in VLSI Design Conference
                (VLSID)Juanuary, Delhi, India., 2019
              </p>
              <p className="publication-item">
                <span>5</span> Chandrakant Navdeti, Chandan Giri and Indrajit
                Banerjee, Distributed Alpha-Fair Transmit Power Adaptation Based
                Congestion Control in VANET, Accepted for publication in ICDCN
                2019, January 4-7 2019, Bangalore, 2019
              </p>
            </ul>
          </Tab>

          <Tab eventKey="books" title="Books">
            <ul className="list-unstyled mt-4 mb-4">
              <p className="publication-item">
                <span>1</span> A Biswas, P Bhattacharya, S. P. Maity, An
                Efficient Semiautomatic Active Contour Model of Liver Tumor
                Segmentation from CT Images, 75-85, Computational Network
                Application Tools for Performance Management, Springer, 2020
              </p>
              <p className="publication-item">
                <span>2</span> Mihir K Chakraborty, Sukanta Das, Subhasis
                Bandopadhyay, Kamalika Bhattacharjee, Raju Hazari, Sumit Adak,
                Souvik Roy, Supreeti Kamilya, A Journey through the Logic
                Wonderland, Indian Institute of Engineering Science and
                Technology, Shibpur, 2020{" "}
              </p>
              <p className="publication-item">
                <span>3</span> S. Pal, S.Kandar, RSA based Remote User
                Authentication Scheme for Telecare Medical Information System,
                IoT: Privacy and Security paradigm, CRC press Taylor and
                Francis, 2020{" "}
              </p>
              <p className="publication-item">
                <span>4</span> Anal Paul and Santi P. Maity, Differential
                Evolution in PFCM Clustering for Energy Efficient Cooperative
                Spectrum Sensing, 77-101, "Advances in Intelligent Computing”
                Studies of Computational Intelligence, Springer, 2019{" "}
              </p>
              <p className="publication-item">
                <span>5</span> S.Kandar, Undecidability, SLM for M.Sc. Computer
                Sc, DDE, Vidyasagar University, 2019{" "}
              </p>
            </ul>
          </Tab>
        </Tabs>
        <hr />
      </div>
    );
}

export default Publication;