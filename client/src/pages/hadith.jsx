import React, { useState } from 'react';
import styles from './hadith.module.css';
import Headertwo from '../components/headertwo';
import Footer from '../components/footer';

function Hadith() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Hadith', arabic: 'جميع الأحاديث', icon: '📚' },
    { id: 'faith', name: 'Faith & Belief', arabic: 'الإيمان والعقيدة', icon: '🕌' },
    { id: 'prayer', name: 'Prayer', arabic: 'الصلاة', icon: '🙏' },
    { id: 'charity', name: 'Charity', arabic: 'الصدقة', icon: '🤲' },
    { id: 'manners', name: 'Good Manners', arabic: 'الأخلاق الحميدة', icon: '😊' },
    { id: 'family', name: 'Family', arabic: 'الأسرة', icon: '👨‍👩‍👧‍👦' },
    { id: 'knowledge', name: 'Knowledge', arabic: 'العلم', icon: '📖' },
    { id: 'patience', name: 'Patience', arabic: 'الصبر', icon: '⏳' },
    { id: 'forgiveness', name: 'Forgiveness', arabic: 'المغفرة', icon: '🤝' },
    { id: 'gratitude', name: 'Gratitude', arabic: 'الشكر', icon: '🙏' }
  ];

  const grades = [
    { id: 'all', name: 'All Grades', color: '#6c757d' },
    { id: 'sahih', name: 'Sahih', color: '#28a745' },
    { id: 'hasan', name: 'Hasan', color: '#ffc107' },
    { id: 'daif', name: 'Da\'if', color: '#dc3545' }
  ];

  const hadiths = [
    {
      id: 1,
      category: 'faith',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: إِنَّ اللَّهَ لَا يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ، وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ',
      english: 'The Messenger of Allah ﷺ said: "Allah does not look at your appearance or wealth, but He looks at your hearts and deeds."',
      reference: 'Sahih Muslim 2564',
      grade: 'Sahih',
      explanation: 'This hadith emphasizes that Allah judges people by their intentions and actions, not by their outward appearance or material possessions. It teaches us that true worth is measured by the purity of our hearts and the goodness of our deeds.',
      benefits: ['Strengthens faith', 'Encourages good deeds', 'Promotes humility'],
      tags: ['faith', 'character', 'judgment']
    },
    {
      id: 2,
      category: 'prayer',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: الصَّلَاةُ خَيْرُ مَوْضُوعٍ، فَمَنْ شَاءَ اسْتَقَلَّ وَمَنْ شَاءَ اسْتَكْثَرَ',
      english: 'The Messenger of Allah ﷺ said: "Prayer is the best thing that has been ordained, so whoever can perform more of it should do so."',
      reference: 'Sahih Muslim 281',
      grade: 'Sahih',
      explanation: 'This hadith highlights the importance of prayer and encourages Muslims to perform as many voluntary prayers as they can. It shows that prayer is the foundation of our relationship with Allah.',
      benefits: ['Strengthens connection with Allah', 'Brings peace', 'Purifies the soul'],
      tags: ['prayer', 'worship', 'voluntary']
    },
    {
      id: 3,
      category: 'charity',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',
      english: 'The Messenger of Allah ﷺ said: "Whoever relieves a Muslim of a hardship from the hardships of this world, Allah will relieve him of a hardship from the hardships of the Day of Resurrection."',
      reference: 'Sahih Muslim 2699',
      grade: 'Sahih',
      explanation: 'This hadith teaches us the importance of helping others and how such acts of kindness will be rewarded by Allah. It encourages us to be compassionate and supportive of our fellow Muslims.',
      benefits: ['Encourages helping others', 'Promises divine reward', 'Builds community'],
      tags: ['charity', 'helping', 'reward']
    },
    {
      id: 4,
      category: 'manners',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
      english: 'The Messenger of Allah ﷺ said: "None of you will believe until you love for your brother what you love for yourself."',
      reference: 'Sahih al-Bukhari 13',
      grade: 'Sahih',
      explanation: 'This hadith teaches the golden rule of Islam - to treat others as you would like to be treated yourself. It emphasizes the importance of empathy and selflessness.',
      benefits: ['Promotes empathy', 'Builds community', 'Strengthens faith'],
      tags: ['manners', 'empathy', 'community']
    },
    {
      id: 5,
      category: 'family',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ، وَأَنَا خَيْرُكُمْ لِأَهْلِي',
      english: 'The Messenger of Allah ﷺ said: "The best of you is the best to his family, and I am the best to my family."',
      reference: 'Sunan at-Tirmidhi 3895',
      grade: 'Hasan',
      explanation: 'This hadith emphasizes the importance of treating one\'s family with kindness and respect. It shows that true goodness begins at home.',
      benefits: ['Strengthens family bonds', 'Promotes kindness', 'Sets good example'],
      tags: ['family', 'kindness', 'respect']
    },
    {
      id: 6,
      category: 'faith',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
      english: 'The Messenger of Allah ﷺ said: "Whoever believes in Allah and the Last Day, let him speak good or remain silent."',
      reference: 'Sahih al-Bukhari 6475',
      grade: 'Sahih',
      explanation: 'This hadith teaches us to control our speech and only say things that are beneficial or remain silent. It emphasizes the importance of mindful communication.',
      benefits: ['Controls speech', 'Promotes mindfulness', 'Prevents harm'],
      tags: ['speech', 'mindfulness', 'control']
    },
    {
      id: 7,
      category: 'knowledge',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ',
      english: 'The Messenger of Allah ﷺ said: "Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise."',
      reference: 'Sahih Muslim 2699',
      grade: 'Sahih',
      explanation: 'This hadith emphasizes the importance of seeking knowledge and how it leads to Paradise. It encourages Muslims to be lifelong learners.',
      benefits: ['Encourages learning', 'Leads to Paradise', 'Broadens understanding'],
      tags: ['knowledge', 'learning', 'paradise']
    },
    {
      id: 8,
      category: 'patience',
      narrator: 'Abu Huraira',
      arabic: 'قَالَ رَسُولُ اللَّهِ ﷺ: مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلَا وَصَبٍ وَلَا هَمٍّ وَلَا حُزْنٍ وَلَا أَذًى وَلَا غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلَّا كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ',
      english: 'The Messenger of Allah ﷺ said: "No fatigue, illness, anxiety, sorrow, harm or sadness afflicts a Muslim, even to the extent of a thorn pricking him, without Allah expiating some of his sins because of it."',
      reference: 'Sahih al-Bukhari 5641',
      grade: 'Sahih',
      explanation: 'This hadith teaches us that all difficulties and hardships we face in life serve as a means of expiating our sins, encouraging patience and gratitude.',
      benefits: ['Encourages patience', 'Provides comfort', 'Promotes gratitude'],
      tags: ['patience', 'hardship', 'expiation']
    }
  ];

  const filteredHadiths = hadiths.filter(hadith => {
    const matchesCategory = selectedCategory === 'all' || hadith.category === selectedCategory;
    const matchesGrade = selectedGrade === 'all' || hadith.grade.toLowerCase() === selectedGrade;
    const matchesSearch = hadith.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hadith.arabic.includes(searchTerm) ||
                         hadith.narrator.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesGrade && matchesSearch;
  });

  return (
    <div className={styles.container}>
      <Headertwo />
      
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroHeader}>
              <h1>Hadith Collection</h1>
              <h2>مجموعة الأحاديث</h2>
              <p>Discover the authentic sayings and teachings of Prophet Muhammad ﷺ</p>
            </div>
            
            <div className={styles.searchSection}>
              <div className={styles.searchBox}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                  type="text"
                  placeholder="Search hadiths..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.filtersSection}>
          <div className={styles.filtersContainer}>
            <div className={styles.filterGroup}>
              <h3>Categories</h3>
              <div className={styles.categoriesContainer}>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <div className={styles.categoryName}>{category.name}</div>
                    <div className={styles.categoryArabic}>{category.arabic}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3>Hadith Grade</h3>
              <div className={styles.gradesContainer}>
                {grades.map((grade) => (
                  <button
                    key={grade.id}
                    className={`${styles.gradeButton} ${selectedGrade === grade.id ? styles.active : ''}`}
                    onClick={() => setSelectedGrade(grade.id)}
                    style={{ '--grade-color': grade.color }}
                  >
                    {grade.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.hadithSection}>
          <div className={styles.resultsInfo}>
            <h3>Found {filteredHadiths.length} hadith{filteredHadiths.length !== 1 ? 's' : ''}</h3>
          </div>
          
          <div className={styles.hadithGrid}>
            {filteredHadiths.map((hadith) => (
              <div key={hadith.id} className={styles.hadithCard}>
                <div className={styles.hadithHeader}>
                  <div className={styles.hadithInfo}>
                    <span className={styles.narrator}>Narrated by {hadith.narrator}</span>
                    <span className={`${styles.grade} ${styles[hadith.grade.toLowerCase()]}`}>
                      {hadith.grade}
                    </span>
                  </div>
                  <div className={styles.reference}>{hadith.reference}</div>
                </div>
                
                <div className={styles.arabicText}>
                  {hadith.arabic}
                </div>
                
                <div className={styles.englishText}>
                  <h4>English Translation</h4>
                  <p>{hadith.english}</p>
                </div>
                
                <div className={styles.explanation}>
                  <h4>Explanation</h4>
                  <p>{hadith.explanation}</p>
                </div>

                <div className={styles.benefits}>
                  <h4>Key Benefits</h4>
                  <ul className={styles.benefitsList}>
                    {hadith.benefits.map((benefit, index) => (
                      <li key={index} className={styles.benefitItem}>
                        <span className={styles.benefitIcon}>✨</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.tags}>
                  {hadith.tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Hadith; 