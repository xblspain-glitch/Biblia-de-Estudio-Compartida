(function(){
  'use strict';

  const META_KEY='biblia_shared_publication_v1';
  const ALLOWED_KEYS=new Set([
    'explanations','dictionaryCustom','dictionaryEdits','dictionaryDeleted','importedTitles',
    'biblia_fragment_clarifications_v3168','biblia_fragment_clarification_exclusions_v3151',
    'biblia_verse_corrections_v3190','biblia_entity_link_choices_v31106',
    'biblia_dictionary_occurrence_exclusions_v31107','biblia_dictionary_global_form_exclusions_v31157',
    'biblia_personajes_crud_v16433','biblia_parabolas_crud_v16433','biblia_guias_crud_v16435',
    'biblia_profecias_crud_v270','biblia_lugares_crud_v283'
  ]);

  function validPublication(value){
    return value&&value.app==='Mi Biblia de Estudio · contenido compartido'&&value.schema===1&&
      typeof value.publicationId==='string'&&value.storage&&typeof value.storage==='object'&&!Array.isArray(value.storage);
  }

  function installReadOnlyPresentation(){
    document.documentElement.classList.add('shared-reader');
    const selectors=[
      '#editExplanationInline','#pasteExplanation','#saveExplanation','#separateExplanationParagraphs','#editExplanation',
      '#restoreVerseOriginal','#saveVerseCorrection','#saveFragmentClarification','#cancelFragmentEdit',
      '#addDictionaryEntry','#addDictionaryEquivalent','#addDictionaryBriefPhrase','#deleteDictionaryEntry',
      '#saveDictionaryEntry','#saveDictionaryEquivalent','#saveDictionaryBriefPhrase',
      '.action-fragment','.action-remove-explanation','.action-correct-verse','#installTitles',
      '.module-crud-tools','.crud-add','.crud-trash',
      '[onclick*="editBiblicalCharacter"]','[onclick*="openBiblicalPlaceEditor"]','[onclick*="openBiblicalProphecyEditor"]'
    ];
    const hide=()=>document.querySelectorAll(selectors.join(',')).forEach(element=>element.hidden=true);
    hide();
    new MutationObserver(hide).observe(document.documentElement,{childList:true,subtree:true});
  }

  async function initialize(){
    let publication=null;
    try{
      const response=await fetch('./contenido-compartido.json',{cache:'no-store'});
      if(!response.ok)throw new Error('HTTP '+response.status);
      publication=await response.json();
      if(!validPublication(publication))throw new Error('Formato de publicación no válido');
      const current=localStorage.getItem(META_KEY)||'';
      if(current!==publication.publicationId){
        const entries=Object.entries(publication.storage)
          .filter(([key,value])=>ALLOWED_KEYS.has(key)&&typeof value==='string');
        if(!entries.length)throw new Error('La publicación no contiene grupos compatibles');
        await window.BibleStorageV1.applyEntries(entries);
        localStorage.setItem(META_KEY,publication.publicationId);
        await window.BibleStorageV1.flush();
      }
    }catch(error){
      console.warn('Se usará el último contenido compartido disponible',error);
    }
    window.__BIBLE_SHARED_READ_ONLY__=true;
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installReadOnlyPresentation,{once:true});
    else installReadOnlyPresentation();
    return publication;
  }

  window.BibleSharedContentV1={initialize};
})();
