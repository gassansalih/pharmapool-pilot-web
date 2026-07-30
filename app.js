const translations = {
  ar: { overview:'نظرة عامة', opportunities:'الفرص', demand:'إشارات الطلب', documents:'خزينة المستندات', activity:'سجل النشاط', legal:'تجربة أولية فقط. المشاركة غير متاحة للعامة.', workspace:'مساحة التجربة', pilot:'تجربة مجتمع الصيادلة المؤسسين', welcome:'صباح الخير، أمل.', welcomeDesc:'هذه حالة دورة الاستيراد الحالية.', newOpportunity:'فرصة جديدة', noticeTitle:'المشاركة العامة غير مفعّلة', noticeText:'تسجّل هذه التجربة الالتزامات فقط. تبقى الأموال مع المسار القانوني أو الضمان المعتمد.', activeOpportunities:'الفرص النشطة', approvalGates:'بوابات الاعتماد', oneGate:'بوابة واحدة متبقية', nextMilestone:'المحطة التالية', commercialReview:'المراجعة التجارية', currentOpportunity:'الفرصة الحالية', currentOpportunityDesc:'دفعة استيراد واحدة مدعومة بالطلب مع سجل تدقيق كامل.', viewDetails:'عرض التفاصيل ←', inReview:'قيد المراجعة', verifiedDemand:'الطلب المتحقق', poolTarget:'الهدف المالي', expectedMargin:'هامش الربح المتوقع', expectedReceipt:'الوصول المتوقع', demand:'الطلب', pharmaCompliance:'الامتثال الدوائي', commercial:'تجاري', legalPayment:'القانوني والدفع', approved:'موافق عليه', awaiting:'بانتظار المراجعة', notStarted:'لم يبدأ', reviewOpportunity:'مراجعة الفرصة', milestoneProgress:'تقدم المحطات', milestoneProgressDesc:'يبدأ التنفيذ فقط بعد مرور جميع البوابات.', created:'تم إنشاء الفرصة', demandVerified:'تم التحقق من الطلب', blockedUntil:'محجوب حتى الموافقة التجارية', recentActivity:'النشاط الأخير', auditTrail:'سجل تدقيق غير قابل للتعديل', viewAll:'عرض الكل', uploaded:'رفع', approvedText:'وافق على', demandGate:'بوابة الطلب', flagged:'وضع علامة على', certificateExpiry:'انتهاء شهادة خلال 45 يوماً' },
  en: {}
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
document.getElementById('languageToggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  const arabic = currentLang === 'ar'; document.documentElement.lang = currentLang; document.documentElement.dir = arabic ? 'rtl' : 'ltr'; document.body.classList.toggle('rtl', arabic);
  document.getElementById('languageToggle').textContent = arabic ? 'English' : 'العربية';
  document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (arabic && translations.ar[key]) { el.dataset.original = el.textContent; el.textContent = translations.ar[key]; } else if (!arabic && el.dataset.original) el.textContent = el.dataset.original; });
});
