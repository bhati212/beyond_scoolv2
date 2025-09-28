// src/components/quiz/quizData.ts
import fraction from "../../assets/fraction.jpg"
import foodChain from "../../assets/foodChain.jpg";

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
}

interface Quiz {
  id: string;
  image:string;
  name: string; // Used in URL, e.g., 'equivalent-fractions'
  title: string; // Display title, e.g., { en: 'Equivalent Fractions', es: 'Fracciones Equivalentes' }
  difficulty: 'Easy' | 'Medium' | 'Hard'; // ADDED
  views: string; // ADDED (e.g., '40k')
  questions: { [key: string]: QuizQuestion[] };
}

interface Subject {
  id: string;
  name: string; // Used in URL, e.g., 'maths'
  quizzes: Quiz[];
}

interface Grade {
  id: string;
  name: string;
  subjects: Subject[];
}

export const quizDatabase: { grades: Grade[] } = {
  grades:[
    {
        id: 'grade-4',
        name:'Grade 4',
        subjects: [
            {
            id: 'maths',
            name: 'maths',
            quizzes: [
                {
                  id: 'equivalent-fractions',
                  name: 'equivalent-fractions',
                  title: 'Equivalent Fractions',
                  image:fraction,
                  difficulty: 'Medium', // ADDED
                  views: '42k', // ADDED
                  questions: {
                      en: [
                      { id: 1, questionText: 'Which fraction is equivalent to 1/2?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                      { id: 2, questionText: 'Which fraction is equivalent to 2/3?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                      { id: 3, questionText: 'Which fraction is equivalent to 3/5?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                      { id: 4, questionText: 'Which fraction is equivalent to 1/4?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                      { id: 5, questionText: 'Which fraction is equivalent to 5/6?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                      { id: 6, questionText: 'Which fraction is equivalent to 2/5?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                      { id: 7, questionText: 'Which fraction is equivalent to 3/4?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                      { id: 8, questionText: 'Which fraction is equivalent to 4/7?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                      { id: 9, questionText: 'Which fraction is equivalent to 7/8?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                      { id: 10, questionText: 'Which fraction is equivalent to 9/10?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 },
                      ],
                      es: [
                      { id: 1, questionText: '¿Qué fracción es equivalente a 1/2?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                      { id: 2, questionText: '¿Qué fracción es equivalente a 2/3?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                      { id: 3, questionText: '¿Qué fracción es equivalente a 3/5?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                      { id: 4, questionText: '¿Qué fracción es equivalente a 1/4?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                      { id: 5, questionText: '¿Qué fracción es equivalente a 5/6?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                      { id: 6, questionText: '¿Qué fracción es equivalente a 2/5?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                      { id: 7, questionText: '¿Qué fracción es equivalente a 3/4?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                      { id: 8, questionText: '¿Qué fracción es equivalente a 4/7?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                      { id: 9, questionText: '¿Qué fracción es equivalente a 7/8?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                      { id: 10, questionText: '¿Qué fracción es equivalente a 9/10?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 },
                      ],
                      fr: [
                            { id: 1, questionText: 'Quelle fraction est équivalente à 1/2 ?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                            { id: 2, questionText: 'Quelle fraction est équivalente à 2/3 ?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                            { id: 3, questionText: 'Quelle fraction est équivalente à 3/5 ?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                            { id: 4, questionText: 'Quelle fraction est équivalente à 1/4 ?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                            { id: 5, questionText: 'Quelle fraction est équivalente à 5/6 ?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                            { id: 6, questionText: 'Quelle fraction est équivalente à 2/5 ?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                            { id: 7, questionText: 'Quelle fraction est équivalente à 3/4 ?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                            { id: 8, questionText: 'Quelle fraction est équivalente à 4/7 ?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                            { id: 9, questionText: 'Quelle fraction est équivalente à 7/8 ?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                            { id: 10, questionText: 'Quelle fraction est équivalente à 9/10 ?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 }
                          ],
                      zh: [
                            { id: 1, questionText: '哪一个分数等于 1/2？', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                            { id: 2, questionText: '哪一个分数等于 2/3？', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                            { id: 3, questionText: '哪一个分数等于 3/5？', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                            { id: 4, questionText: '哪一个分数等于 1/4？', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                            { id: 5, questionText: '哪一个分数等于 5/6？', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                            { id: 6, questionText: '哪一个分数等于 2/5？', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                            { id: 7, questionText: '哪一个分数等于 3/4？', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                            { id: 8, questionText: '哪一个分数等于 4/7？', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                            { id: 9, questionText: '哪一个分数等于 7/8？', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                            { id: 10, questionText: '哪一个分数等于 9/10？', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 }
                          ],
                      pt: [
                            { id: 1, questionText: 'Qual fração é equivalente a 1/2?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                            { id: 2, questionText: 'Qual fração é equivalente a 2/3?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                            { id: 3, questionText: 'Qual fração é equivalente a 3/5?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                            { id: 4, questionText: 'Qual fração é equivalente a 1/4?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                            { id: 5, questionText: 'Qual fração é equivalente a 5/6?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                            { id: 6, questionText: 'Qual fração é equivalente a 2/5?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                            { id: 7, questionText: 'Qual fração é equivalente a 3/4?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                            { id: 8, questionText: 'Qual fração é equivalente a 4/7?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                            { id: 9, questionText: 'Qual fração é equivalente a 7/8?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                            { id: 10, questionText: 'Qual fração é equivalente a 9/10?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 }
                          ],
                      ru: [
                            { id: 1, questionText: 'Какая дробь эквивалентна 1/2?', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                            { id: 2, questionText: 'Какая дробь эквивалентна 2/3?', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                            { id: 3, questionText: 'Какая дробь эквивалентна 3/5?', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                            { id: 4, questionText: 'Какая дробь эквивалентна 1/4?', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                            { id: 5, questionText: 'Какая дробь эквивалентна 5/6?', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                            { id: 6, questionText: 'Какая дробь эквивалентна 2/5?', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                            { id: 7, questionText: 'Какая дробь эквивалентна 3/4?', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                            { id: 8, questionText: 'Какая дробь эквивалентна 4/7?', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                            { id: 9, questionText: 'Какая дробь эквивалентна 7/8?', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                            { id: 10, questionText: 'Какая дробь эквивалентна 9/10?', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 }
                          ],
                      ar: [
                            { id: 1, questionText: 'ما الكسر المكافئ لـ 1/2؟', options: ['2/4', '3/5', '4/6', '5/10'], correctAnswerIndex: 0 },
                            { id: 2, questionText: 'ما الكسر المكافئ لـ 2/3؟', options: ['4/6', '5/7', '3/4', '6/10'], correctAnswerIndex: 0 },
                            { id: 3, questionText: 'ما الكسر المكافئ لـ 3/5؟', options: ['6/10', '4/7', '9/15', '12/20'], correctAnswerIndex: 0 },
                            { id: 4, questionText: 'ما الكسر المكافئ لـ 1/4؟', options: ['2/8', '3/5', '4/10', '5/15'], correctAnswerIndex: 0 },
                            { id: 5, questionText: 'ما الكسر المكافئ لـ 5/6؟', options: ['10/12', '8/10', '7/9', '12/15'], correctAnswerIndex: 0 },
                            { id: 6, questionText: 'ما الكسر المكافئ لـ 2/5؟', options: ['4/10', '3/7', '6/12', '8/20'], correctAnswerIndex: 0 },
                            { id: 7, questionText: 'ما الكسر المكافئ لـ 3/4؟', options: ['6/8', '5/6', '9/12', '12/16'], correctAnswerIndex: 0 },
                            { id: 8, questionText: 'ما الكسر المكافئ لـ 4/7؟', options: ['8/14', '6/10', '5/9', '12/18'], correctAnswerIndex: 0 },
                            { id: 9, questionText: 'ما الكسر المكافئ لـ 7/8؟', options: ['14/16', '9/10', '12/15', '8/12'], correctAnswerIndex: 0 },
                            { id: 10, questionText: 'ما الكسر المكافئ لـ 9/10؟', options: ['18/20', '8/12', '12/15', '15/18'], correctAnswerIndex: 0 }
                          ]
                  }
                }
              ]
            },
            {
              id:'science',
              name: 'Science',
              quizzes:[
                {
                  id: 'food-chains-and-food-webs',
                  name: 'Food Chains and Food Webs',
                  title: 'Food Chains and Food Webs',
                  image:foodChain,
                  difficulty: 'Easy', // ADDED
                  views: '20k', // ADDED,
                  questions:{
                    en: [
                          { id: 1, questionText: 'What is the main source of energy for all food chains?', options: ['Sun', 'Water', 'Soil', 'Air'], correctAnswerIndex: 0 },
                          { id: 2, questionText: 'Which of these is a producer in a food chain?', options: ['Lion', 'Grass', 'Tiger', 'Eagle'], correctAnswerIndex: 1 },
                          { id: 3, questionText: 'Which of these is a herbivore?', options: ['Cow', 'Tiger', 'Eagle', 'Snake'], correctAnswerIndex: 0 },
                          { id: 4, questionText: 'Which of these is a carnivore?', options: ['Deer', 'Cow', 'Lion', 'Goat'], correctAnswerIndex: 2 },
                          { id: 5, questionText: 'Which of these is an omnivore?', options: ['Dog', 'Tiger', 'Cow', 'Goat'], correctAnswerIndex: 0 },
                          { id: 6, questionText: 'Which of these is at the top of the food chain?', options: ['Plants', 'Herbivores', 'Carnivores', 'Soil'], correctAnswerIndex: 2 },
                          { id: 7, questionText: 'What do plants use to make their own food?', options: ['Sunlight', 'Meat', 'Milk', 'Eggs'], correctAnswerIndex: 0 },
                          { id: 8, questionText: 'Which of these shows the correct order of a simple food chain?', options: ['Sun → Plant → Grasshopper → Frog', 'Sun → Tiger → Grass → Cow', 'Sun → Snake → Plant → Deer', 'Sun → Grass → Lion → Plant'], correctAnswerIndex: 0 },
                          { id: 9, questionText: 'Which organisms break down dead plants and animals?', options: ['Producers', 'Consumers', 'Decomposers', 'Herbivores'], correctAnswerIndex: 2 },
                          { id: 10, questionText: 'What happens if one part of a food web is removed?', options: ['Nothing changes', 'It affects the whole web', 'Plants disappear only', 'Only animals die'], correctAnswerIndex: 1 }
                        ],
                    fr: [
                          { id: 1, questionText: 'Quelle est la principale source d\'énergie de toutes les chaînes alimentaires ?', options: ['Soleil', 'Eau', 'Sol', 'Air'], correctAnswerIndex: 0 },
                          { id: 2, questionText: 'Lequel de ceux-ci est un producteur dans une chaîne alimentaire ?', options: ['Lion', 'Herbe', 'Tigre', 'Aigle'], correctAnswerIndex: 1 },
                          { id: 3, questionText: 'Lequel de ceux-ci est un herbivore ?', options: ['Vache', 'Tigre', 'Aigle', 'Serpent'], correctAnswerIndex: 0 },
                          { id: 4, questionText: 'Lequel de ceux-ci est un carnivore ?', options: ['Cerf', 'Vache', 'Lion', 'Chèvre'], correctAnswerIndex: 2 },
                          { id: 5, questionText: 'Lequel de ceux-ci est un omnivore ?', options: ['Chien', 'Tigre', 'Vache', 'Chèvre'], correctAnswerIndex: 0 },
                          { id: 6, questionText: 'Lequel de ceux-ci est au sommet de la chaîne alimentaire ?', options: ['Plantes', 'Herbivores', 'Carnivores', 'Sol'], correctAnswerIndex: 2 },
                          { id: 7, questionText: 'Que utilisent les plantes pour fabriquer leur propre nourriture ?', options: ['Lumière du soleil', 'Viande', 'Lait', 'Œufs'], correctAnswerIndex: 0 },
                          { id: 8, questionText: 'Lequel de ceux-ci montre l\'ordre correct d\'une chaîne alimentaire simple ?', options: ['Soleil → Plante → Sauterelle → Grenouille', 'Soleil → Tigre → Herbe → Vache', 'Soleil → Serpent → Plante → Cerf', 'Soleil → Herbe → Lion → Plante'], correctAnswerIndex: 0 },
                          { id: 9, questionText: 'Quels organismes décomposent les plantes et animaux morts ?', options: ['Producteurs', 'Consommateurs', 'Décomposeurs', 'Herbivores'], correctAnswerIndex: 2 },
                          { id: 10, questionText: 'Que se passe-t-il si une partie d\'une toile alimentaire est supprimée ?', options: ['Rien ne change', 'Cela affecte toute la toile', 'Seules les plantes disparaissent', 'Seuls les animaux meurent'], correctAnswerIndex: 1 }
                        ],
                    ru: [
                          { id: 1, questionText: 'Какой основной источник энергии во всех пищевых цепочках?', options: ['Солнце', 'Вода', 'Земля', 'Воздух'], correctAnswerIndex: 0 },
                          { id: 2, questionText: 'Кто из этих является производителем в пищевой цепочке?', options: ['Лев', 'Трава', 'Тигр', 'Орёл'], correctAnswerIndex: 1 },
                          { id: 3, questionText: 'Кто из этих является травоядным?', options: ['Корова', 'Тигр', 'Орёл', 'Змея'], correctAnswerIndex: 0 },
                          { id: 4, questionText: 'Кто из этих является плотоядным?', options: ['Олень', 'Корова', 'Лев', 'Коза'], correctAnswerIndex: 2 },
                          { id: 5, questionText: 'Кто из этих является всеядным?', options: ['Собака', 'Тигр', 'Корова', 'Коза'], correctAnswerIndex: 0 },
                          { id: 6, questionText: 'Кто находится на вершине пищевой цепочки?', options: ['Растения', 'Травоядные', 'Плотоядные', 'Земля'], correctAnswerIndex: 2 },
                          { id: 7, questionText: 'Что используют растения для производства своей пищи?', options: ['Солнечный свет', 'Мясо', 'Молоко', 'Яйца'], correctAnswerIndex: 0 },
                          { id: 8, questionText: 'Какой из этих вариантов правильно отображает порядок в пищевой цепочке?', options: ['Солнце → Растение → Скакалец → Лягушка', 'Солнце → Тигр → Трава → Корова', 'Солнце → Змея → Растение → Олень', 'Солнце → Трава → Лев → Растение'], correctAnswerIndex: 0 },
                          { id: 9, questionText: 'Какие организмы разлагают мёртвые растения и животных?', options: ['Производители', 'Потребители', 'Разлагающие организмы', 'Травоядные'], correctAnswerIndex: 2 },
                          { id: 10, questionText: 'Что произойдёт, если часть пищевой сети исчезнет?', options: ['Ничего не изменится', 'Это повлияет на всю сеть', 'Исчезнут только растения', 'Погибнут только животные'], correctAnswerIndex: 1 }
                        ],
                    zh: [
                          { id: 1, questionText: '所有食物链的主要能量来源是什么？', options: ['太阳', '水', '土壤', '空气'], correctAnswerIndex: 0 },
                          { id: 2, questionText: '以下哪一个是食物链中的生产者？', options: ['狮子', '草', '老虎', '鹰'], correctAnswerIndex: 1 },
                          { id: 3, questionText: '以下哪一个是食草动物？', options: ['牛', '老虎', '鹰', '蛇'], correctAnswerIndex: 0 },
                          { id: 4, questionText: '以下哪一个是食肉动物？', options: ['鹿', '牛', '狮子', '山羊'], correctAnswerIndex: 2 },
                          { id: 5, questionText: '以下哪一个是杂食动物？', options: ['狗', '老虎', '牛', '山羊'], correctAnswerIndex: 0 },
                          { id: 6, questionText: '以下哪一个在食物链的顶端？', options: ['植物', '食草动物', '食肉动物', '土壤'], correctAnswerIndex: 2 },
                          { id: 7, questionText: '植物用什么制造自己的食物？', options: ['阳光', '肉', '牛奶', '鸡蛋'], correctAnswerIndex: 0 },
                          { id: 8, questionText: '以下哪一个显示了一个简单食物链的正确顺序？', options: ['太阳 → 植物 → 蚱蜢 → 青蛙', '太阳 → 老虎 → 草 → 牛', '太阳 → 蛇 → 植物 → 鹿', '太阳 → 草 → 狮子 → 植物'], correctAnswerIndex: 0 },
                          { id: 9, questionText: '哪些生物分解死去的植物和动物？', options: ['生产者', '消费者', '分解者', '食草动物'], correctAnswerIndex: 2 },
                          { id: 10, questionText: '如果食物网的一部分被移除，会发生什么？', options: ['没有变化', '影响整个食物网', '只有植物消失', '只有动物死亡'], correctAnswerIndex: 1 }
                        ],
                    es: [
                          { id: 1, questionText: '¿Cuál es la principal fuente de energía para todas las cadenas alimentarias?', options: ['Sol', 'Agua', 'Suelo', 'Aire'], correctAnswerIndex: 0 },
                          { id: 2, questionText: '¿Cuál de estos es un productor en una cadena alimentaria?', options: ['León', 'Hierba', 'Tigre', 'Águila'], correctAnswerIndex: 1 },
                          { id: 3, questionText: '¿Cuál de estos es un herbívoro?', options: ['Vaca', 'Tigre', 'Águila', 'Serpiente'], correctAnswerIndex: 0 },
                          { id: 4, questionText: '¿Cuál de estos es un carnívoro?', options: ['Ciervo', 'Vaca', 'León', 'Cabra'], correctAnswerIndex: 2 },
                          { id: 5, questionText: '¿Cuál de estos es un omnívoro?', options: ['Perro', 'Tigre', 'Vaca', 'Cabra'], correctAnswerIndex: 0 },
                          { id: 6, questionText: '¿Cuál de estos está en la cima de la cadena alimentaria?', options: ['Plantas', 'Herbívoros', 'Carnívoros', 'Suelo'], correctAnswerIndex: 2 },
                          { id: 7, questionText: '¿Qué usan las plantas para hacer su propio alimento?', options: ['Luz solar', 'Carne', 'Leche', 'Huevos'], correctAnswerIndex: 0 },
                          { id: 8, questionText: '¿Cuál de estos muestra el orden correcto de una cadena alimentaria simple?', options: ['Sol → Planta → Saltamontes → Rana', 'Sol → Tigre → Hierba → Vaca', 'Sol → Serpiente → Planta → Ciervo', 'Sol → Hierba → León → Planta'], correctAnswerIndex: 0 },
                          { id: 9, questionText: '¿Qué organismos descomponen plantas y animales muertos?', options: ['Productores', 'Consumidores', 'Descomponedores', 'Herbívoros'], correctAnswerIndex: 2 },
                          { id: 10, questionText: '¿Qué pasa si se elimina una parte de una red alimentaria?', options: ['Nada cambia', 'Afecta a toda la red', 'Solo desaparecen las plantas', 'Solo mueren los animales'], correctAnswerIndex: 1 }
                        ],
                    pt: [
                        { id: 1, questionText: 'Qual é a principal fonte de energia para todas as cadeias alimentares?', options: ['Sol', 'Água', 'Solo', 'Ar'], correctAnswerIndex: 0 },
                        { id: 2, questionText: 'Qual destes é um produtor em uma cadeia alimentar?', options: ['Leão', 'Grama', 'Tigre', 'Águia'], correctAnswerIndex: 1 },
                        { id: 3, questionText: 'Qual destes é um herbívoro?', options: ['Vaca', 'Tigre', 'Águia', 'Cobra'], correctAnswerIndex: 0 },
                        { id: 4, questionText: 'Qual destes é um carnívoro?', options: ['Cervo', 'Vaca', 'Leão', 'Cabra'], correctAnswerIndex: 2 },
                        { id: 5, questionText: 'Qual destes é um onívoro?', options: ['Cachorro', 'Tigre', 'Vaca', 'Cabra'], correctAnswerIndex: 0 },
                        { id: 6, questionText: 'Qual destes está no topo da cadeia alimentar?', options: ['Plantas', 'Herbívoros', 'Carnívoros', 'Solo'], correctAnswerIndex: 2 },
                        { id: 7, questionText: 'O que as plantas usam para fazer seu próprio alimento?', options: ['Luz solar', 'Carne', 'Leite', 'Ovos'], correctAnswerIndex: 0 },
                        { id: 8, questionText: 'Qual destes mostra a ordem correta de uma cadeia alimentar simples?', options: ['Sol → Planta → Gafanhoto → Sapo', 'Sol → Tigre → Grama → Vaca', 'Sol → Cobra → Planta → Cervo', 'Sol → Grama → Leão → Planta'], correctAnswerIndex: 0 },
                        { id: 9, questionText: 'Quais organismos decompõem plantas e animais mortos?', options: ['Produtores', 'Consumidores', 'Decompositores', 'Herbívoros'], correctAnswerIndex: 2 },
                        { id: 10, questionText: 'O que acontece se uma parte de uma teia alimentar for removida?', options: ['Nada muda', 'Afeta toda a teia', 'Apenas as plantas desaparecem', 'Apenas os animais morrem'], correctAnswerIndex: 1 }
                      ],
                    ar: [
                      { id: 1, questionText: 'ما هو المصدر الرئيسي للطاقة لجميع السلاسل الغذائية؟', options: ['الشمس', 'الماء', 'التربة', 'الهواء'], correctAnswerIndex: 0 },
                      { id: 2, questionText: 'أي من هؤلاء هو منتج في السلسلة الغذائية؟', options: ['الأسد', 'العشب', 'النمر', 'النسر'], correctAnswerIndex: 1 },
                      { id: 3, questionText: 'أي من هؤلاء هو آكل أعشاب؟', options: ['البقرة', 'النمر', 'النسر', 'الثعبان'], correctAnswerIndex: 0 },
                      { id: 4, questionText: 'أي من هؤلاء هو آكل لحوم؟', options: ['الغزال', 'البقرة', 'الأسد', 'الماعز'], correctAnswerIndex: 2 },
                      { id: 5, questionText: 'أي من هؤلاء هو آكل لكل شيء؟', options: ['الكلب', 'النمر', 'البقرة', 'الماعز'], correctAnswerIndex: 0 },
                      { id: 6, questionText: 'أي من هؤلاء في قمة السلسلة الغذائية؟', options: ['النباتات', 'آكلات الأعشاب', 'آكلات اللحوم', 'التربة'], correctAnswerIndex: 2 },
                      { id: 7, questionText: 'بماذا تستخدم النباتات لصنع طعامها؟', options: ['أشعة الشمس', 'اللحم', 'الحليب', 'البيض'], correctAnswerIndex: 0 },
                      { id: 8, questionText: 'أي من هؤلاء يُظهر الترتيب الصحيح لسلسلة غذائية بسيطة؟', options: ['الشمس → النبات → الجرادة → الضفدع', 'الشمس → النمر → العشب → البقرة', 'الشمس → الثعبان → النبات → الغزال', 'الشمس → العشب → الأسد → النبات'], correctAnswerIndex: 0 },
                      { id: 9, questionText: 'ما الكائنات التي تحلل النباتات والحيوانات الميتة؟', options: ['المنتجون', 'المستهلكون', 'المحللات', 'آكلات الأعشاب'], correctAnswerIndex: 2 },
                      { id: 10, questionText: 'ماذا يحدث إذا أُزيل جزء من الشبكة الغذائية؟', options: ['لا شيء يتغير', 'يؤثر على الشبكة بأكملها', 'تختفي النباتات فقط', 'تموت الحيوانات فقط'], correctAnswerIndex: 1 }
                    ]
                  }
                }
              ]
            }
        ]
    }
  ]
};

// --- Helper function to fetch the correct quiz data ---
export const getQuiz = (gradeId: string, subjectId: string, quizId: string, language: string) => {
  const grade = quizDatabase.grades.find(g => g.id === gradeId);
  if (!grade) return null;

  const subject = grade.subjects.find(s => s.id === subjectId);
  if (!subject) return null;

  const quiz = subject.quizzes.find(q => q.id === quizId);
  if (!quiz) return null;

  // Logic for questions remains multilingual with a fallback to English
  const questions = quiz.questions[language] || quiz.questions['en'];
  
  // CHANGED: Title is now fetched directly
  const title = quiz.title;

  if (!questions || !title) return null;

  return { title, questions };
};

export const languages = {
    en: 'English',
    zh: 'Mandarin Chinese',
    es: 'Spanish',
    fr: 'French',
    ar: 'Arabic',
    pt: 'Portuguese',
    ru: 'Russian',
    de: 'German'
};

export const getAllQuizzes = () => {
    const allQuizzes = [];
    for (const grade of quizDatabase.grades) {
        for (const subject of grade.subjects) {
            for (const quiz of subject.quizzes) {
                allQuizzes.push({
                    ...quiz,
                    gradeName: grade.name,
                    gradeId: grade.id,
                    subjectName: subject.name,
                    subjectId: subject.id,
                });
            }
        }
    }
    return allQuizzes;
};

export const getAllGrades = () => {
    return quizDatabase.grades.map(grade => ({ id: grade.id, name: grade.name }));
};

export const getQuizDetails = (gradeId: string, subjectId: string, quizId: string) => {
    const grade = quizDatabase.grades.find(g => g.id === gradeId);
    const subject = grade?.subjects.find(s => s.id === subjectId);
    const quiz = subject?.quizzes.find(q => q.id === quizId);

    if (!quiz || !grade || !subject) return null;

    return {
        ...quiz,
        gradeName: grade.name,
        subjectName: subject.name,
    };
};