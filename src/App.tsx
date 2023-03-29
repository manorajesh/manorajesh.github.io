import { useState, useEffect } from 'react';
import Modal from 'react-overlays/Modal';
import chr21 from '/chr21.svg';
import './App.css';

function App() {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ['/Karyotype.jpg', '/trisomy.png'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const [showModal, setShowModal] = useState(false);
  const [selectedGene, setSelectedGene] = useState('');

  const renderBackdrop = (props: React.HTMLAttributes<HTMLDivElement>) => <div className="backdrop" {...props} />;

  const handleClose = () => setShowModal(false);

  const handleGeneClick = (geneName: string) => {
    setSelectedGene(geneName);
    setShowModal(true);
  };

  let modalContent;
  switch (selectedGene) {
    case "APP":
      modalContent = <div className="model_content">
        <h1>Early-Onset Alzheimer's</h1>
        <h3>What Is It?</h3>
        <p>Early-onset Alzheimer's Disease is a subtype of Alzheimer's Disease that affects people with Down syndrome, caused by an overexpression of the <i>APP</i> gene on chromosome 21 which produces amyloid-beta proteins that accumulate and form amyloid plaques in the brain. This subtype of Alzheimer's Disease manifests before the age of 65 and usually appears in people with Down syndrome or Mosaic Down syndrome in their 40s or 50s, causing symptoms such as memory loss, confusion, and changes in behavior and personality, as well as a decline in cognitive function, loss of motor skills, and difficulties with speech and language as the disease progresses.</p>
        <h3>Scientific Analysis</h3>
        <img src='/EOAD.png' alt='Early-Onset Alzheimers' />
        <img src='/central_dogma.png' alt='Central Dogma' id='cd' />
        <h3>Central Dogma</h3>
        <p>In normal cell function, RNA polymerase binds to the promoter region of DNA and starts the transcription stage, leading to mRNA. This mRNA then exits the cell nucleus and attaches to ribosomes in the cytoplasm. Here, tRNA carries the corresponding anticodon and amino acid to the ribosome where a polypeptide chain is built. This polypeptide chain is then folded and organized into proteins which carry out cell function.</p>
        <p>In abnormal cell function:</p>
        <ol>
          <li>There are 3 chromosomes 21 chromatids which increases the production of the genes they carry.</li>
          <li>The APP or amyloid precursor protein gene is overexpressed and overproduced. That protein helps strengthen neural pathways</li>
          <li>The increased production of the protein increases the chances of a mutant protein entering the cell</li>
          <li>Eventually, mutant β-amyloid is produced which builds up in the brain</li>
          <li>This plaque then destroys neural pathways which can cause early-onset Alzheimer’s</li>
        </ol>
        <h3>Patient Article</h3>
        <p><b>Patient Intro</b><br></br>Aisha Surana led a life of normalcy: Her parents immigrated from India in the late ‘60s to Los Angeles where she and her younger sister were born. She went through her life with no more trouble than any other in her position. Riding the huge boom in IT and the general “tech” wave in the ‘90s, she joined a tech startup as a full-time software developer and was quite successful. She started a family with her husband and 2 children who are now both in college. She lives as an empty-nester with her husband currently, still employed at that original company she started working for all those years ago. However, at the age of 50, she encountered symptoms that were unusual for her age: She seemed to start forgetting basic chores and concepts, remembering people’s names and faces, and she seemed to get lost very easily. She could remember that her mother and father showed none of the symptoms she started to exhibit. Her husband, Alex, who was also around the same age as her, shared the sentiment that her symptoms weren’t consistent with her age. They decided that she should visit her general practitioner.</p>

        <p><b>General Practitioner</b><br></br>
          When presented with her symptoms, her general practitioner wanted to rule out any other conditions that could cause memory decay such as vitamin deficiencies or infections like meningitis or encephalitis. The GP advised for a blood panel where any common causes were ruled out. Here, the GP told Aisha that her symptoms could be early-onset Alzheimer’s (EOAD), but to be confident, the GP referred her to a neurologist for cognitive tests and brain imaging. He explained that EOAD is a form of Alzheimer’s disease that occurs before the age of 65. Aisha’s next question, understandably, was what the prognosis would be. Her GP said, “There is no cure for Alzheimer's disease, but there are treatments available that can help manage the symptoms and slow the progression of the disease. We'll discuss those options in more detail once we have a better idea of what's going on.”</p>

        <p><b>Neurologist and Diagnosis</b><br></br>
          At the neurologist’s office, Aisha was asked about her medical history where she explained that she had Type 2 diabetes that seemed to come from her father’s side, but she kept it under control with semaglutide medication. She also spoke about her delayed growth and general development in her younger years compared to her younger sister. With this information, the neurologist performed the MoCA and MMSE cognitive tests on Aisha where she scored lower than the average in language, memory, and executive functioning. To move forward, the neurologist then ordered a brain MRI to confirm EOAD. After the MRI scan, the neurologist noticed the growth of amyloid β plaque near the hippocampus and inflammation of the brain. The buildup of amyloid β plaque indicated overexpression of the amyloid precursor protein or APP gene which is a hallmark of EOAD. The overexpression of the APP gene can be caused by many factors but in Aisha’s case, it wouldn’t be out of the question for Mosaic Down Syndrome (Trisomy 21) to cause it. This would corroborate the delayed growth in Aisha’s younger years, and her diabetes could have increased the risk of EOAD. With this, the neurologist recommended Aisha get a chromosomal microarray analysis or similar chromosomal test to check for trisomy 21 in her body cells.</p>

        <p><b>Genetic Specialist and MDS</b><br></br>
          After a CMA from a genetics specialist, it is confirmed that Aisha has Mosaic Down Syndrome with mosaicism of around 40%. This means that 40% of Aisha’s body cells have 47 chromosomes (trisomy 21) rather than the usual 46. Trisomy 21 or Down Syndrome can lead to but is not limited to increased risk of EOAD, decreased cognitive ability, and irregular physical and mental development. Aisha has Mosaic Down Syndrome (MDS) which is much rarer than DS; only 1-3% of DS patients have MDS (Ringman et al 2008). Although very rare, MDS can be hereditary, so genetic testing of her children and close family would be required to confirm if Aisha’s MDS was spontaneous or hereditary.</p>

        <p><b>Prognosis and Beyond</b><br></br>
          With this sudden inflow of information, Aisha and Alex were understandably shocked. Aisha wanted to know her prognosis before she told anybody about her condition. From there, she would ask her close family members to get genetic tests to check for mosaicism. Her GP reiterated that there is no cure for EOAD, but it can be treated and managed. Her neurologist prescribed donepezil which boosts memory and neuron repair. Fortunately, her diabetes medication, semaglutide, has also been suggested to reduce amyloid β plaque and help with EOAD, but that isn’t confirmed or approved for that use case. Along with medication, her GP suggested lifestyle changes. Aisha was recommended to do more exercise, eat a healthy diet, and do more memory and generally brain-stimulating activities like reading and socializing. Just as importantly, she needs a strong support system of trusted friends and family members. Her husband had vowed to “love and support her through any of her ups and downs, sticking by her side and helping her live her dream life.” Her mother has also promised to be with her as long as she could, but her mother is quite old and dealing with medical problems herself. Aisha has two loving, college-going children that have made it a point to help her through any of her troubles, especially by revitalizing her damaged neural connections by speaking with her daily. </p>

        <p><b>Conclusion</b><br></br>
          Aisha Surana lived with MDS her entire life unknowingly but dealing with its growing impact. She achieved great success while hitting roadblocks along the way. However, she grows from each obstacle as she will from EOAD too. She has a strong and loving care team and support system that will help her throughout her life to deal with MDS and EOAD. Although Alzheimer’s has no cure, Aisha will not let it define her or any other of the amazing goals she will reach.</p>
      </div>;
      break;
    case "RUNX1":
      modalContent = <div className="model_content">
        <h1>CBF-AML</h1>
        <h3>What Is It?</h3>
        <p>Core binding factor acute myeloid leukemia (CBF-AML) is a subtype of acute myeloid leukemia. AML is a type of cancer that affects the bone marrow and blood cells. CBF-AML is associated with chromosomal rearrangements between chromosome 8, 21, and 16. The rearrangements are linked with core binding factor genes; specifically <i>RUNX1</i>. This gene is affected by a type of genetic rearrangement known as a translocation; in this type of change, pieces of DNA from two chromosomes break off and are interchanged.</p>
        <h3>Scientific Analysis</h3>
        <img src='/AML.png' alt='AML' />
        <img src='/cell_cycle.gif' alt='Cell Cycle' id='cd' />
        <img src='/cancer_cells.png' alt='Cancer Cells' id='cd' />
        <h3>Mitosis</h3>
        <p>In the cell cycle, cells grow and divide. Cell cycle has different stages called G1, S, G2, and M. At the end, cell division occurs, and two cells are left which indicates that the process can start again. Mitosis is the process in which a single cell divides into two identical daughter cells (cell division). The role mitosis plays is to create new cells and replace old ones. However, changes during this process can lead to changes in DNA which could then possibly lead to genetic disorders. There are five steps in mitosis: prophase, metaphase, anaphase, and telophase.</p>
        <p>Mitosis and Cell Cycle: Normal vs Cancerous Cells:</p>
        <ol>
          <li>Normal cells follow a cycle where they die in the end since they will be replaced with healthy cells. Cancer cells don't follow a cycle. Instead of dying, they grow and multiply which creates abnormal cells.</li>
          <li>In cancer, cells often reproduce quickly which leaves room for more error. Due to the quick growth, the cells won’t function properly because they aren’t mature enough.</li>
          <li>Errors in DNA synthesis can result in development of cancer.</li>
          <li>As the cells proliferate, tumors occur which can be deadly.</li>
        </ol>
        <h3>Patient Article</h3>
        <p><b>Patient Intro</b><br></br>Joseph Smith is a twenty one-year-old contractor who has lived a great life with his family. After highschool, he took over his father’s business in construction. He is a construction contractor and is very passionate about his work. Joseph loves creating small projects for his family as well, and that is due to his gifted innovative skills. He's been married to his wife Susan for two years and has a daughter named Lily. Aside from this, Joseph hasn’t been feeling well, and he hasn't been for the past couple of weeks. He’s experienced constant fevers and night sweats. His wife also noticed that he had been losing weight. Joseph assumed that these symptoms were just a part of a common cold. It wasn’t until these symptoms dragged out for weeks that his wife began to get worried. They decided to go to the emergency room, rather than make a trip to the doctor's office. They wanted answers, and they wanted them now.</p>

        <p><b>Emergency Room</b><br></br>
          In the emergency room, the doctors wanted to rule out the different possibilities of what could be happening to Joseph. Several hours later, a bone marrow biopsy and several blood tests were taken, and these were the tests that helped us identify what was wrong with Joseph. Doctors were then able to detect cancerous cells which also determined that he had leukemia; more specifically, acute myeloid leukemia. Although it was confirmed that Joseph did have AML, doctors ran a final test to confirm the form of AML and whether it was caused by a genetic abnormality or not. To do so, biomarker testing was done and that determined the form of AML that was indeed caused by a genetic abnormality. Joseph was not only diagnosed with AML, but with core binding factor AML (CBF-AML). Core binding factor acute myeloid leukemia (CBF-AML) is a subtype of acute myeloid leukemia. CBF-AML is associated with chromosomal rearrangements between chromosome 8, 21, and 16. The rearrangements are linked with core binding factor genes; specifically <i>RUNX1</i>.</p>

        <p><b>Overview of Disease</b><br></br>
          Cancer is a disease that can start anywhere in the body and occurs when our body’s cells grow uncontrollably and spread throughout the body. Cells go through a process called cell division, but if this process malfunctions, a mutation can occur. This could lead to abnormal cells to grow and multiply.  Leukemia is a type of cancer where abnormal blood cells begin to grow, and this typically begins in the bone marrow. There are many forms of leukemia and some may be common in children or can be seen more in adults. Leukemia occurs when abnormal white blood cells are produced which then leads them to multiply and develop. There are many types of leukemias and they are classified depending on which white blood cells they affect. In this case, Joseph is fighting AML which affects the myeloid cells in the bone marrow; therefore, in AML the bone marrow creates abnormal myeloid cells which soon prevent the production of healthy blood cells. Those diagnosed with CBF-AML have a shortage of all types of mature blood cells: a shortage of white blood cells, a low number of red blood cells, and a reduction in the amount of platelets. CBF-AML is a secondary form of AML that is characterized by the presence of chromosomal abnormalities. This news has shocked Joseph and his family. Cancer is not something easy to navigate, so with love and support they are getting through this difficult time and working together to see what is best for Joseph. Aside from this devastating news, Joseph is ambitious and hopeful of battling and overcoming this disease.</p>

        <p><b>Joseph’s Journey</b><br></br>
          Through Joseph's journey, he remained happy and optimistic. Cancer is a disease that can leave one with many negative effects. Although Joseph has remained positive, he has had some issues surrounding his mental health. Due to all the steps one goes through with cancer, it can take a toll on their mental health. The emotional stress and physical pain he experienced took a toll on his mental health that sometimes left him with a drained feeling. Aside from this disease affecting Joseph's mental health, it also affected his family as well. Since his family was right by his side, they also felt the emotional distress. They may not have felt the physical pain from procedures but they did experience seeing Joseph in pain. Seeing a loved one in such a state can affect one's mental health. Although there were many harsh parts of battling this disease, there were also some happy days that did make Joseph and his family smile.</p>

        <p><b>Treatment and Current Status</b><br></br>
          As for treatment, Joseph received chemotherapy. His treatment depends on his overall health and other factors that contributed. Due to Joseph being diagnosed with CBF-AML, he received two chemotherapy drugs: cytarabine and daunorubicin. Both chemo drugs are mainly for the use of leukemia. Daunorubicin helps slow down the growth of cancer cells and cytarabine also has the same role. Many procedures and clinic visits later, Joseph entered remission and has been healthier than he's ever been. Currently, he is in his third year of remission and once he completes the five year mark, he will be considered cancer free. Aside from frequent check ups to monitor his blood cells, Joseph is living a great, stable life with his wife and kids. He is a lot happier now and is able to spend quality time with his family more often. Joseph is a strong fighter who overcame a very pivotal moment in his life. He took his years in treatment little by little and day by day. With the love and support he received from his family and doctors he was able to have a successful outcome.</p>
      </div>;
      break;
    case "Chromosome Insights":
      modalContent = <div className="model_content">
        <h1>Insights</h1>
        <h3>Fun Facts</h3>
        <p>
          <ul>
            <li>Chromosome 21 is the smallest autosome</li>
            <li>Trisomy 21 is where a human has three copies of chromosome 21 which is commonly manifests as Down Syndrome</li>
            <li>Chromosome 21 was the first chromosome to be sequenced by the Human Genome Project in 2000</li>
            <li>Chromosome 21 is believed to have evolved from two ancestral chromosomes in primates around 25 million years ago</li>
            <li>Many of chromosome 21’s genes code for brain development and functions</li>
          </ul>
        </p>
        <h3>Karyotype</h3>
        <p>A karyotype is visual representation of an organism's chromosomes. They can be helpful in diagnosing anueplodies such as Trisomy 21 which causes Down Syndrome</p>
        <img src={images[imageIndex]} alt='Karyotype' className='karyotype'></img>
        <h3>Anatomy of Chromosome</h3>
        <img src="/chr_anatomy.png" alt='Chromosome Anatomy' className='chr_anatomy'></img>
      </div>;
      break;
    case "Works Cited":
      modalContent = <div className="model_content">
        <h1>Works Cited</h1>
        <p className='works_cited_entries'>Abowen. “Managing Mental Health After a Cancer Diagnosis - Nursing@Georgetown.” GU-MSN, 14 Oct. 2021, online.nursing.georgetown.edu/blog/cancer-mental-health/#:~:text=The%20emotional%20stress%2C%20uncertainty%2C%20and,the%20body%20and%20the%20mind.<br></br><br></br>
          “Acute Myeloid Leukemia Treatment (PDQ®)–Patient Version.” National Cancer Institute, 19 Aug. 2022, www.cancer.gov/types/leukemia/patient/adult-aml-treatment-pdq.<br></br><br></br>
          “Alzheimer’s Genes: Are You at Risk?” Mayo Clinic, 6 May 2021, www.mayoclinic.org/diseases-conditions/alzheimers-disease/in-depth/alzheimers-genes/art-20046552.<br></br><br></br>
          APP Gene: MedlinePlus Genetics. medlineplus.gov/genetics/gene/app/#conditions.<br></br><br></br>
          Chemotherapy for Acute Myeloid Leukemia (AML). www.cancer.org/cancer/acute-myeloid-leukemia/treating/chemotherapy.html.<br></br><br></br>
          “Early-Onset Alzheimer’s Disease.” Johns Hopkins Medicine, 8 Aug. 2021, www.hopkinsmedicine.org/health/conditions-and-diseases/alzheimers-disease/earlyonset-alzheimer-disease.<br></br><br></br>
          “Gene Expression.” Genome.gov, www.genome.gov/genetics-glossary/Gene-Expression.<br></br><br></br>
          “---.” Genome.gov, www.genome.gov/genetics-glossary/Gene-Expression.<br></br><br></br>
          “Genetic Mutations: Overview and Types.” Cleveland Clinic, my.clevelandclinic.org/health/body/23095-genetic-mutations-in-humans.<br></br><br></br>
          “---.” Cleveland Clinic, my.clevelandclinic.org/health/body/23095-genetic-mutations-in-humans.<br></br><br></br>
          “How Is Alzheimer’s Disease Treated?” National Institute on Aging, www.nia.nih.gov/health/how-alzheimers-disease-treated.<br></br><br></br>
          If You Have Acute Myeloid Leukemia (AML). www.cancer.org/cancer/acute-myeloid-leukemia/if-you-have-acute-myeloid-leukemia.html.<br></br><br></br>
          “Mechanisms for Changing Gene Expression and Their Possible Relationship to Carcinogenesis.” PubMed, 1985, pubmed.ncbi.nlm.nih.gov/3916656/#:~:text=Abstract,identified%20in%20some%20cancer%20cells.<br></br><br></br>
          MedlinePlus: Chromosomes and mtDNA. medlineplus.gov/genetics/chromosome.<br></br><br></br>
          “NCI Dictionary of Cancer Terms.” National Cancer Institute, www.cancer.gov/publications/dictionaries/cancer-terms/def/cancer.<br></br><br></br>
          Risk Factors for Acute Myeloid Leukemia (AML). www.cancer.org/cancer/acute-myeloid-leukemia/causes-risks-prevention/risk-factors.html.<br></br><br></br>
          “Treatments.” Alzheimer’s Disease and Dementia, www.alz.org/alzheimers-dementia/treatments.<br></br><br></br>
          Villines, Zawn. What Are Acute Myeloid Leukemia Complications? 27 Oct. 2021, www.medicalnewstoday.com/articles/acute-myeloid-leukemia-complications.<br></br><br></br>
          Website, Nhs. “Diagnosis.” nhs.uk, 31 Oct. 2022, www.nhs.uk/conditions/acute-myeloid-leukaemia/diagnosis/#:~:text=To%20confirm%20a%20diagnosis%20of,sample%20of%20liquid%20bone%20marrow.<br></br><br></br>
          ---. “Prevention.” nhs.uk, 30 May 2022, www.nhs.uk/conditions/alzheimers-disease/prevention.<br></br><br></br>
          “What Happens to the Brain in Alzheimer’s Disease?” National Institute on Aging, www.nia.nih.gov/health/what-happens-brain-alzheimers-disease.<br></br><br></br>
          “What Is Cancer?” National Cancer Institute, 11 Oct. 2021, www.cancer.gov/about-cancer/understanding/what-is-cancer.<br></br><br></br>
          “---.” National Cancer Institute, 11 Oct. 2021, www.cancer.gov/about-cancer/understanding/what-is-cancer.<br></br><br></br>
          “What Is Epigenetics? | CDC.” Centers for Disease Control and Prevention, 15 Aug. 2022, www.cdc.gov/genomics/disease/epigenetics.htm.<br></br><br></br>
          “---.” Centers for Disease Control and Prevention, 15 Aug. 2022, www.cdc.gov/genomics/disease/epigenetics.htm.<br></br><br></br>
        </p>
      </div>
      break;
    default:
      modalContent = null;
  }

  return (
    <div className="App">
      <h1 className="title">Chromosome 21</h1>
      <div className="container">
        <div className="image-container">
          <img src={chr21} className="image" alt="Chromosome 21" />
        </div>
        <div className="genes">
          <div className="APP" onClick={() => handleGeneClick("APP")}>
            <h2><i>APP</i></h2>
          </div>
          <div className="RUNX1" onClick={() => handleGeneClick("RUNX1")}>
            <h2><i>RUNX1</i></h2>
          </div>
          <div className="insights" onClick={() => handleGeneClick("Chromosome Insights")}>
            <h2><i>Chromosome Insights</i></h2>
          </div>
          <div className="works_cited" onClick={() => handleGeneClick("Works Cited")}>
            <h2><i>Works Cited</i></h2>
          </div>
        </div>
      </div>
      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      ><div>{modalContent}</div>
      </Modal>
    </div>
  );
}


export default App;