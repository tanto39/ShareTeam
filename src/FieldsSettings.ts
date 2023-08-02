enum fieldTypes {
  input = 'input',
  select = 'select',
  textarea = 'textarea',
  date = 'date',
  skills = 'skills'
};

interface IFieldsSettings {
  fieldName: string,
  fieldType: fieldTypes,
  fieldTitle: string,
  showInList: boolean,
};

export const FieldsSettings: IFieldsSettings[] = [
  {
    fieldName: 'jobTitle',
    fieldType: fieldTypes.input,
    fieldTitle: 'Заголовок',
    showInList: true,
  },
  {
    fieldName: 'rank',
    fieldType: fieldTypes.input,
    fieldTitle: 'Ранг',
    showInList: true,
  },
  {
    fieldName: 'locationWorked',
    fieldType: fieldTypes.input,
    fieldTitle: 'Место работы',
    showInList: false,
  },
  {
    fieldName: 'endFree',
    fieldType: fieldTypes.date,
    fieldTitle: 'Дата окончания',
    showInList: true,
  },
  {
    fieldName: 'description',
    fieldType: fieldTypes.textarea,
    fieldTitle: 'Описание',
    showInList: false,
  },
  {
    fieldName: 'skills',
    fieldType: fieldTypes.skills,
    fieldTitle: 'Навыки',
    showInList: true,
  },
]