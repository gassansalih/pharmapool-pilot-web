const translations = {
  ar: { overview:'نظرة عامة', opportunities:'الفرص', demand:'إشارات الطلب', documents:'خزينة المستندات', activity:'سجل النشاط', legal:'تجربة أولية فقط. المشاركة غير متاحة للعامة.', workspace:'مساحة التجربة', pilot:'تجربة مجتمع الصيادلة المؤسسين', welcome:'مرحباً بعودتك.', welcomeDesc:'هذه حالة دورة الاستيراد الحالية.', newOpportunity:'فرصة جديدة', noticeTitle:'المشاركة العامة غير مفعّلة', noticeText:'تسجّل هذه التجربة الالتزامات فقط. تبقى الأموال مع المسار القانوني أو الضمان المعتمد.', activeOpportunities:'الفرص النشطة', approvalGates:'بوابات الاعتماد', oneGate:'بوابة واحدة متبقية', nextMilestone:'المحطة التالية', commercialReview:'المراجعة التجارية', currentOpportunity:'الفرصة الحالية', currentOpportunityDesc:'دفعة استيراد واحدة مدعومة بالطلب مع سجل تدقيق كامل.', viewDetails:'عرض التفاصيل ←', inReview:'قيد المراجعة', verifiedDemand:'الطلب المتحقق', poolTarget:'الهدف المالي', expectedMargin:'هامش الربح المتوقع', expectedReceipt:'الوصول المتوقع', demand:'الطلب', pharmaCompliance:'الامتثال الدوائي', commercial:'تجاري', legalPayment:'القانوني والدفع', approved:'موافق عليه', awaiting:'بانتظار المراجعة', notStarted:'لم يبدأ', reviewOpportunity:'مراجعة الفرصة', milestoneProgress:'تقدم المحطات', milestoneProgressDesc:'يبدأ التنفيذ فقط بعد مرور جميع البوابات.', created:'تم إنشاء الفرصة', demandVerified:'تم التحقق من الطلب', blockedUntil:'محجوب حتى الموافقة التجارية', recentActivity:'النشاط الأخير', auditTrail:'سجل تدقيق غير قابل للتعديل', viewAll:'عرض الكل', uploaded:'رفع', approvedText:'وافق على', demandGate:'بوابة الطلب', flagged:'وضع علامة على', certificateExpiry:'انتهاء شهادة خلال 45 يوماً' },
  en: {}
};
const landingTranslations = {
  ar: {
    how:'كيف يعمل', safety:'السلامة في صميم التصميم', pilot:'تجربة مجتمع الصيادلة المؤسسين · السودان', heroTitle:'إمداد دوائي موثوق', heroEm:'يبدأ بالدليل.', heroBody:'تجمع فارما بول الطلب المتحقق والتنفيذ المرخّص وكل المستندات الأساسية في مساحة عمل واحدة قابلة للتتبع لكل دورة استيراد.', explore:'استكشف التجربة', seeHow:'اعرف كيف يعمل', poolNumber:'مجمع واحد', poolText:'لكل دفعة استيراد', gatesNumber:'4 بوابات', gatesText:'قبل التنفيذ', auditNumber:'سجل تدقيق واحد', auditText:'من الطلب إلى الإغلاق', liveWorkspace:'مساحة عمل التجربة المباشرة', poolName:'مجمع المضادات الحيوية الأساسية', inReviewLanding:'قيد المراجعة', verifiedDemandLanding:'الطلب المتحقق', packs:'عبوة', expectedReceiptLanding:'الوصول المتوقع', demandLanding:'الطلب', complianceLanding:'الامتثال', commercialLanding:'التجاري', legalLanding:'القانوني', complianceGate:'بوابة الامتثال', evidenceReviewed:'تمت مراجعة الأدلة', documentsReviewed:'التسجيل والترخيص ومستندات الجودة', certificate:'شهادة التحليل', versioned:'مؤرشفة · مراجَعة', caption:'طريقة أكثر أماناً لتنسيق كل دورة استيراد', systemFor:'نظام واحد منضبط لـ', verifiedDemandStory:'طلب متحقق', qualityEvidenceStory:'أدلة الجودة', licensedExecutionStory:'تنفيذ مرخّص', auditableResultsStory:'نتائج قابلة للتدقيق', builtFor:'مصمم لواقع استيراد الأدوية', safetyTitle:'السلامة والوضوح', safetyTitleTwo:'في كل نقطة قرار.', demandBefore:'الطلب قبل رأس المال', demandBeforeBody:'تبدأ كل فرصة بطلب مشترين محدّدين، لا بوعود مبهمة عن العوائد.', safetyHardStop:'السلامة نقطة توقف حاسمة', safetyHardStopBody:'تتم مراجعة التسجيل والصلاحية والتخزين وأدلة الجودة قبل التنفيذ.', onePool:'مجمع واحد، سجل تدقيق واحد', onePoolBody:'تبقى المستندات والموافقات والمحطات والنتائج مرتبطة بدفعة الاستيراد نفسها.', pilotExperience:'فارما بول · تجربة أولية', legalFooter:'المشاركة غير متاحة للعامة. أي طرح مستقبلي يخضع للموافقة القانونية والتنظيمية.', openWorkspace:'افتح مساحة العمل'
  }
};
let currentLang = 'en';
const toast = document.querySelector('.toast');
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
function setView(id) { document.querySelectorAll('.view').forEach(v => v.classList.toggle('active', v.id === id)); document.querySelectorAll('.nav-link').forEach(n => n.classList.toggle('active', n.dataset.view === id)); window.scrollTo({top:0, behavior:'smooth'}); document.querySelector('.sidebar').classList.remove('open'); }
function enterDemo() { document.querySelector('.showcase').style.display = 'none'; document.querySelector('.app-shell').classList.add('open'); window.scrollTo({ top: 0, behavior: 'instant' }); }
document.querySelectorAll('.enter-demo').forEach(button => button.addEventListener('click', enterDemo));
document.querySelectorAll('.nav-link').forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => setView(button.dataset.open)));
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.sidebar').classList.toggle('open'));
document.querySelectorAll('#newOpportunity, #newOpportunity2').forEach(b => b.addEventListener('click', () => document.querySelector('#newDialog').showModal()));
document.querySelector('#reviewButton').addEventListener('click', () => document.querySelector('#reviewDialog').showModal());
document.querySelector('#reviewDialog').addEventListener('close', e => { if (e.target.returnValue === 'approve') showToast('Commercial gate approved — the decision has been logged.'); });
document.querySelector('#newDialog').addEventListener('close', e => { if (e.target.returnValue === 'create') showToast('Draft opportunity created. Add required evidence to continue.'); });
function setLanguage(language) {
  currentLang = language;
  const arabic = language === 'ar';
  document.documentElement.lang = language;
  document.documentElement.dir = arabic ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', arabic);
  document.getElementById('languageToggle').textContent = arabic ? 'English' : 'العربية';
  document.querySelector('.showcase-language').textContent = arabic ? 'English' : 'العربية';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!el.dataset.original) el.dataset.original = el.textContent;
    el.textContent = arabic && translations.ar[key] ? translations.ar[key] : el.dataset.original;
  });
  document.querySelectorAll('[data-landing]').forEach(el => {
    const key = el.dataset.landing;
    if (!el.dataset.original) el.dataset.original = el.textContent;
    el.textContent = arabic && landingTranslations.ar[key] ? landingTranslations.ar[key] : el.dataset.original;
  });
  document.querySelector('.showcase').classList.toggle('showcase-ar', arabic);
}
document.getElementById('languageToggle').addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ar' : 'en'));
document.querySelector('.showcase-language').addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ar' : 'en'));
