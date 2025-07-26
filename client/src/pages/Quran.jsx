import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import styles from './Quran.module.css';

function Quran() {
  const items = [
    { id: 1, name: 'Juz 1', surah: ['1 Al-Fatihah', '2 Al-Bakara'] },
    { id: 2, name: 'Juz 2', surah: ['2 Al-Bakara'] },
    { id: 3, name: 'Juz 3', surah: ['2 Al-Bakara', '3 Ali Imran'] },
    { id: 4, name: 'Juz 4', surah: ['3 Ali Imran', '4 An-Nisa'] },
    { id: 5, name: 'Juz 5', surah: ['4 An-Nisa'] },
    { id: 6, name: 'Juz 6', surah: ['4 An-Nisa', '5 Al-Maidah'] },
    { id: 7, name: 'Juz 7', surah: ['5 Al-Maidah', '6 Al-Anam'] },
    { id: 8, name: 'Juz 8', surah: ['6 Al-Anam', '7 Al-Araf'] },
    { id: 9, name: 'Juz 9', surah: ['7 Al-Araf', '8 Al-Anfal'] },
    { id: 10, name: 'Juz 10', surah: ['8 Al-Anfal', '9 At-Tawbah'] },
    { id: 11, name: 'Juz 11', surah: ['9 At-Tawbah', '10 Yunus', '11 Hud'] },
    { id: 12, name: 'Juz 12', surah: ['11 Hud', '12 Yusuf'] },
    { id: 13, name: 'Juz 13', surah: ['12 Yusuf', '13 Ar-Raad', '14 Ibrahim'] },
    { id: 14, name: 'Juz 14', surah: ['15 Al-Hijr', '16 An-Nahl'] },
    { id: 15, name: 'Juz 15', surah: ['17 Al-Isra', '18 Al-Kahf'] },
    { id: 16, name: 'Juz 16', surah: ['18 Al-Kahf', '19 Maryam', '20 Taha'] },
    { id: 17, name: 'Juz 17', surah: ['21 Al-Anbiya', '22 Al-Hajj'] },
    { id: 18, name: 'Juz 18', surah: ['23 Al-Muminun', '24 An-Nur'] },
    { id: 19, name: 'Juz 19', surah: ['25 Al-Furqan', '26 Ash-Shuara'] },
    { id: 20, name: 'Juz 20', surah: ['27 An-Naml', '28 Al-Qasas'] },
    { id: 21, name: 'Juz 21', surah: ['29 Al-Ankabut', '30 Ar-Rum', '31 Luqman', '32 As-Sajda'] },
    { id: 22, name: 'Juz 22', surah: ['33 Al-Ahzab', '34 Saba', '35 Fatir'] },
    { id: 23, name: 'Juz 23', surah: ['36 Ya-Sin', '37 As-Saffat', '38 Sad'] },
    { id: 24, name: 'Juz 24', surah: ['39 Az-Zumar', '40 Ghafir'] },
    { id: 25, name: 'Juz 25', surah: ['41 Fussilat', '42 Ash-Shura', '43 Az-Zukhruf', '44 Ad-Dukhan', '45 Al-Jathiya'] },
    { id: 26, name: 'Juz 26', surah: ['46 Al-Ahqaf', '47 Muhammad', '48 Al-Fath', '49 Al-Hujurat', '50 Qaf', '51 Adh-Dhariyat'] },
    { id: 27, name: 'Juz 27', surah: ['52 At-Tur', '53 An-Najm', '54 Al-Qamar', '55 Ar-Rahman', '56 Al-Waqia', '57 Al-Hadid'] },
    { id: 28, name: 'Juz 28', surah: ['58 Al-Mujadila', '59 Al-Hashr', '60 Al-Mumtahina', '61 As-Saff', '62 Al-Jumua', '63 Al-Munafiqun', '64 At-Taghabun', '65 At-Talaq', '66 At-Tahrim'] },
    { id: 29, name: 'Juz 29', surah: ['67 Al-Mulk', '68 Al-Qalam', '69 Al-Haqqa', '70 Al-Maarij', '71 Nuh', '72 Al-Jinn', '73 Al-Muzzammil', '74 Al-Muddathir', '75 Al-Qiyama', '76 Al-Insan', '77 Al-Mursalat'] },
    { id: 30, name: 'Juz 30', surah: ['78 An-Naba', '79 An-Naziat', '80 Abasa', '81 At-Takwir', '82 Al-Infitar', '83 Al-Mutaffifin', '84 Al-Inshiqaq', '85 Al-Buruj', '86 At-Tariq', '87 Al-Ala', '88 Al-Ghashiya', '89 Al-Fajr', '90 Al-Balad', '91 Ash-Shams', '92 Al-Layl', '93 Ad-Duha', '94 Ash-Sharh', '95 At-Tin', '96 Al-Alaq', '97 Al-Qadr', '98 Al-Bayyina', '99 Az-Zalzalah', '100 Al-Adiyat', '101 Al-Qaria', '102 At-Takathur', '103 Al-Asr', '104 Al-Humaza', '105 Al-Fil', '106 Quraish', '107 Al-Maun', '108 Al-Kawthar', '109 Al-Kafiroon', '110 An-Nasr', '111 Al-Masad', '112 Al-Ikhlas', '113 Al-Falaq', '114 An-Nas'] }
  ];

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.juzList}>
        {items.map(item => (
          <div key={item.id} className={`${styles.juzCard} ${item.id === 30 ? styles.juz30 : ''}`}>
            <div className={styles.juzDetails}>
              <h2>{item.name}</h2>
              <ul className={item.id === 30 ? styles.juz30List : ''}>
                {item.surah.map((surah, index) => {
                  const [surahId, surahName] = surah.split(' ');
                  return (
                    <li key={index}>
                      <Link to={`/Surah/${surahId}`} className={styles.surahLink}>
                        {surahName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quran;
