// Full JS logic moved from original index.html <script> block
// 1. VIDEOS DATABASE
const videosDb = [
    {
        id: 'RD4KD7JVhZE',
        title: '10 Marine Engineer Interview Questions & Answers',
        category: 'career',
        duration: '12:00',
        views: '1.9K',
        thumbnail: 'https://placehold.co/600x400/031c30/38bdf8?text=10+Marine+Interview+Q%26A',
        description: 'Master your maritime job search with this exhaustive guide. Explains the critical 10 questions frequently asked by superintendents and technical managers during interviews for junior and fourth engineers. Covers engine room emergency procedures, bilge management, and safety protocols.',
        learnings: [
            'How to explain emergency quick-closing valves structure.',
            'Correct response during high crankcase temperature alarms.',
            'Step-by-step procedures for oily bilge water discharge.',
            'Preparing yourself for first job marine electrical diagnostics.'
        ]
    },
    {
        id: 'awpjcz2I9c8',
        title: 'How Refrigeration Works | Ship’s Refrigeration System',
        category: 'auxiliary',
        duration: '1:28',
        views: '2.6K',
        thumbnail: 'https://placehold.co/600x400/031c30/38bdf8?text=Ship+Refrigeration+System',
        description: "Dive into the thermodynamic cycle of a ship's domestic and cargo refrigeration plants. This video simplifies compressor cycles, condenser cooling, thermostatic expansion valves (TXV), and evaporator functions in the maritime environment with intuitive visuals.",
        learnings: [
            'The four primary steps of refrigeration cycle (Compress, Condense, Expand, Evaporate).',
            'How Thermostatic Expansion Valves (TXV) automatically adjust refrigerant flow.',
            'Diagnosing high condenser pressure in warm tropical ocean transits.',
            'Preventing liquid refrigerant slopback in compressor crankcase.'
        ]
    },
    {
        id: 'FyppwEI33Mo',
        title: '2 Stroke Engine Working Explained',
        category: 'propulsion',
        duration: '3:39',
        views: '688',
        thumbnail: 'https://placehold.co/600x400/031c30/38bdf8?text=2+Stroke+Engine+Workings',
        description: 'Visual exploration of the loop-scavenged and uniflow-scavenged two-stroke marine diesel engines. Understand piston motion, fuel injection timing, exhaust valves, scavenge ports, and the ultimate mechanism behind moving massive container carriers.',
        learnings: [
            'Differentiating uniflow scavenging from crosshead-loop configurations.',
            'Exact mechanical timing sequence for cylinder exhaust and air admission.',
            'Role of scavenge air receivers and auxiliary blowers in slow steam modes.',
            'How massive thrust blocks handle raw crankshaft propulsive force.'
        ]
    },
    {
        id: 'JQn0R6rZw10',
        title: 'Mastering Generator Synchronisation',
        category: 'electrical',
        duration: '10:13',
        views: '716',
        thumbnail: 'https://placehold.co/600x400/031c30/38bdf8?text=Mastering+Generator+Sync',
        description: 'A practical look inside the main switchboard. Learn the precise steps to run two marine alternators in parallel, adjusting frequency, voltage matching, using the synchroscope, and closing the air circuit breaker safely.',
        learnings: [
            'Step-by-step manual synchronization using three dark lamps and synchroscopes.',
            'Adjusting governor control switch to balance active kilowatt load sharing.',
            'How Automatic Voltage Regulators (AVR) manage reactive kVAR loading.',
            'Understanding preferential trips and reverse-power safety interlocks.'
        ]
    },
    {
        id: 'h43r6WxSplQ',
        title: 'Two Boilers: Paralleling Procedure',
        category: 'auxiliary',
        duration: '11:40',
        views: '3.0K',
        thumbnail: 'https://placehold.co/600x400/031c30/38bdf8?text=Paralleling+Boilers+Procedure',
        description: 'Detailed operational procedure on bringing an auxiliary boiler online while another is operational. Explains steam line warm-up, balancing water levels, equalizer valve configurations, and safety interlocks to prevent steam hammering.',
        learnings: [
            'The crucial procedure of steam line blowdown and condensate drain to avoid water hammer.',
            'Balancing mechanical water feed rates across two high pressure drums.',
            'Opening equalizer headers sequentially for steady steam pressure stabilization.',
            'Interlocks on combustion burners and flame sensors.'
        ]
    },
    {
        id: 'BaSIWy-hNpg',
        title: 'Synchronize Generators Like a Pro in 10 Minutes!',
        category: 'electrical',
        duration: '8:38',
        views: '87K',
        thumbnail: 'https://placehold.co/600x400/031c30/38bdf8?text=Synchronize+Generators+Fast',
        description: 'A rapid masterclass to solidify generator concepts. Learn the absolute physics constraints behind phase, voltage, and frequency matching before closing the grid breakers on high voltage ships.',
        learnings: [
            'Why phase matching is non-negotiable for alternator grids.',
            'Simulated synchronizer screen walkthrough.',
            'What happens under severe frequency mismatch.',
            'The design of safe diesel generator test procedures.'
        ]
    }
];

// 2. SHOPPING CART SYSTEM
let cart = [];
let activeCategory = 'all';

// Initialize App
window.onload = function() {
    renderVideoCards();
};

// Render Cards dynamically
function renderVideoCards() {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';
    
    const searchVal = document.getElementById('video-search') ? document.getElementById('video-search').value.toLowerCase() : '';
    
    const filtered = videosDb.filter(v => {
        const matchesCategory = (activeCategory === 'all' || v.category === activeCategory);
        const matchesSearch = v.title.toLowerCase().includes(searchVal) || v.description.toLowerCase().includes(searchVal);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-12 text-center text-slate-500">
                <i class="fa-solid fa-triangle-exclamation text-3xl mb-3 block text-cyan-400"></i>
                No tutorials found with those filters. Try a different term or category!
            </div>
        `;
        return;
    }

    filtered.forEach(video => {
        const card = document.createElement('div');
        card.className = "bg-steel-900/40 border border-marine-900/40 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition duration-300 flex flex-col justify-between group cursor-pointer";
        card.onclick = () => openVideoModal(video.id);

        card.innerHTML = `
            <div>
                <div class="relative overflow-hidden aspect-video bg-black">
                    <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    <span class="absolute bottom-2 right-2 bg-steel-950/85 text-white font-mono text-[10px] px-2 py-0.5 rounded tracking-wide border border-marine-900/40">
                        ${video.duration}
                    </span>
                    <div class="absolute inset-0 bg-marine-950/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-200">
                        <div class="bg-cyan-500 text-steel-950 p-4 rounded-full shadow-lg shadow-cyan-500/20 scale-90 group-hover:scale-100 transition-transform duration-200">
                            <i class="fa-solid fa-play text-lg"></i>
                        </div>
                    </div>
                </div>

                <div class="p-5 space-y-3">
                    <div class="flex items-center justify-between">
                        <span class="bg-marine-900/60 text-cyan-400 text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-md uppercase border border-cyan-500/20">
                            ${video.category}
                        </span>
                        <span class="text-xs text-slate-500"><i class="fa-regular fa-eye mr-1"></i>${video.views}</span>
                    </div>
                    <h3 class="font-bold text-white text-base leading-snug group-hover:text-cyan-400 transition-colors">
                        ${video.title}
                    </h3>
                    <p class="text-xs text-slate-400 line-clamp-2">
                        ${video.description}
                    </p>
                </div>
            </div>

            <div class="px-5 py-3.5 border-t border-marine-900/20 bg-steel-950/30 flex items-center justify-between">
                <span class="text-xs text-slate-300 font-medium group-hover:underline">Explore schematics &amp; notes</span>
                <i class="fa-solid fa-arrow-right text-cyan-400 text-xs"></i>
            </div>
        `;
        grid.appendChild(card);
    });
}

function selectVideoCategory(cat) {
    activeCategory = cat;
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.className = "category-tab px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:text-white hover:bg-steel-900 transition border border-transparent hover:border-marine-900/40";
    });

    const activeTab = document.getElementById('tab-' + cat);
    if (activeTab) {
        activeTab.className = "category-tab px-5 py-2.5 rounded-xl text-sm font-semibold transition bg-gradient-to-r from-marine-600 to-cyan-500 text-steel-950 shadow-md";
    }

    renderVideoCards();
}

function filterVideos() {
    renderVideoCards();
}

function addToCart(name, price, type) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, type, quantity: 1 });
    }
    updateCartUI();
    showToast("Added To Bag", `Successfully added ${name} to your checkout list!`);
}

function updateCartQuantity(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    const counter = document.getElementById('cart-counter');
    const itemsList = document.getElementById('cart-items');
    const emptyState = document.getElementById('cart-empty-state');
    const checkoutBox = document.getElementById('cart-checkout-box');
    
    let totalItemsCount = 0;
    let subtotal = 0;
    
    itemsList.innerHTML = '';

    if (cart.length === 0) {
        counter.classList.add('scale-0');
        emptyState.classList.remove('hidden');
        checkoutBox.classList.add('hidden');
        itemsList.appendChild(emptyState);
        return;
    }

    cart.forEach((item, idx) => {
        totalItemsCount += item.quantity;
        const itemCost = item.price * item.quantity;
        subtotal += itemCost;

        const itemRow = document.createElement('div');
        itemRow.className = "flex items-center justify-between gap-4 p-4 bg-steel-950 rounded-xl border border-marine-900/40";
        itemRow.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="h-12 w-12 rounded-lg bg-steel-900 flex items-center justify-center border border-cyan-500/10 text-cyan-400">
                    <i class="${item.type === 'hoodie' ? 'fa-solid fa-shirt' : item.type === 'flask' ? 'fa-solid fa-mug-hot' : 'fa-solid fa-hat-cowboy'}"></i>
                </div>
                <div>
                    <h4 class="font-bold text-white text-xs">${item.name}</h4>
                    <span class="text-[10px] text-slate-500 font-mono">$${item.price.toFixed(2)} each</span>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <button onclick="updateCartQuantity(${idx}, -1)" class="h-6 w-6 rounded bg-steel-900 hover:bg-steel-800 text-slate-400 hover:text-white flex items-center justify-center text-xs transition border border-marine-900/40">-</button>
                <span class="text-xs font-bold text-white font-mono w-4 text-center">${item.quantity}</span>
                <button onclick="updateCartQuantity(${idx}, 1)" class="h-6 w-6 rounded bg-steel-900 hover:bg-steel-800 text-slate-400 hover:text-white flex items-center justify-center text-xs transition border border-marine-900/40">+</button>
            </div>

            <span class="text-xs font-extrabold text-white font-mono w-16 text-right">$${itemCost.toFixed(2)}</span>
        `;
        itemsList.appendChild(itemRow);
    });

    counter.innerText = totalItemsCount;
    counter.classList.remove('scale-0');
    emptyState.classList.add('hidden');
    checkoutBox.classList.remove('hidden');

    document.getElementById('cart-subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').innerText = `$${subtotal.toFixed(2)}`;
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    const drawer = modal.firstElementChild;
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modal.classList.remove('opacity-0');
            drawer.classList.remove('translate-x-full');
        }, 50);
    } else {
        modal.classList.add('opacity-0');
        drawer.classList.add('translate-x-full');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.className = "fa-solid fa-xmark text-xl";
    } else {
        menu.classList.add('hidden');
        icon.className = "fa-solid fa-bars text-xl";
    }
}

function openVideoModal(videoId) {
    const video = videosDb.find(v => v.id === videoId);
    if (!video) return;

    document.getElementById('modal-iframe').src = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    document.getElementById('modal-title').innerText = video.title;
    document.getElementById('modal-category').innerText = video.category;
    document.getElementById('modal-duration').innerHTML = `<i class="fa-regular fa-clock mr-1"></i> ${video.duration} minutes duration`;
    document.getElementById('modal-description').innerText = video.description;
    document.getElementById('modal-yt-btn').href = `https://www.youtube.com/watch?v=${video.id}`;

    const list = document.getElementById('modal-learnings');
    list.innerHTML = '';
    video.learnings.forEach(item => {
        const li = document.createElement('li');
        li.className = "flex items-start gap-2.5";
        li.innerHTML = `<i class="fa-solid fa-check text-emerald-400 mt-0.5"></i> <span>${item}</span>`;
        list.appendChild(li);
    });

    const modal = document.getElementById('video-modal');
    const panel = modal.firstElementChild;
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        panel.classList.remove('scale-95');
    }, 50);
}

function closeVideoModal() {
    const modal = document.getElementById('video-modal');
    const panel = modal.firstElementChild;
    modal.classList.add('opacity-0');
    panel.classList.add('scale-95');
    document.getElementById('modal-iframe').src = "";
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function showToast(title, desc) {
    const toast = document.getElementById('toast-notification');
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-desc').innerText = desc;
    
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.remove('opacity-0');
    }, 50);

    setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 4000);
}

function purchaseCourse(courseName, price) {
    const confirmPurchase = confirm(`Enroll in premium course "${courseName}" for $${price.toFixed(2)}?\n\nThis is a simulation. Proceed to view confirmation!`);
    if (confirmPurchase) {
        showToast("Enrollment Successful!", `Welcome to ${courseName}. Course access details sent to your registered email address.`);
    }
}

function processCheckout() {
    const total = document.getElementById('cart-total').innerText;
    const confirmPurchase = confirm(`Proceed with Engine Room Merch Checkout: ${total}?\n\nThis will trigger simulated order generation!`);
    if (confirmPurchase) {
        cart = [];
        updateCartUI();
        toggleCartModal();
        showToast("Order Dispatched!", `Your maritime package order was registered. Track your waybills shortly via email!`);
    }
}

function handleSubscribe(e) {
    e.preventDefault();
    const email = document.getElementById('subscriber-email').value;
    showToast("Log Book Signed!", `Welcome aboard! Subscriber confirmation sent to ${email}`);
    document.getElementById('subscriber-email').value = '';
}
